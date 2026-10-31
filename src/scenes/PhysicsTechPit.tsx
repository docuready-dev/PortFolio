import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  Physics,
  RigidBody,
  CuboidCollider,
  BallCollider,
  type RapierRigidBody,
} from '@react-three/rapier'
import {
  RoundedBox,
  Text,
} from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import { usePortfolioStore } from '../store'

interface SkillItem {
  name: string
  type: 'glass' | 'ink'
  shape: 'box' | 'capsule'
  width: number
  height: number
  depth: number
}

const SKILL_ITEMS: SkillItem[] = [
  { name: 'React', type: 'glass', shape: 'box', width: 1.25, height: 0.42, depth: 0.55 },
  { name: 'Vite', type: 'ink', shape: 'capsule', width: 1.15, height: 0.46, depth: 0.46 },
  { name: 'Three.js', type: 'glass', shape: 'box', width: 1.35, height: 0.42, depth: 0.55 },
  { name: 'GLSL Shaders', type: 'ink', shape: 'box', width: 1.55, height: 0.42, depth: 0.55 },
  { name: 'Tailwind CSS', type: 'glass', shape: 'box', width: 1.5, height: 0.42, depth: 0.5 },
  { name: 'Figma', type: 'ink', shape: 'capsule', width: 1.15, height: 0.46, depth: 0.46 },
  { name: 'Illustrator', type: 'glass', shape: 'box', width: 1.45, height: 0.42, depth: 0.5 },
  { name: 'UI / UX', type: 'ink', shape: 'box', width: 1.15, height: 0.42, depth: 0.5 },
  { name: 'Node.js', type: 'glass', shape: 'box', width: 1.28, height: 0.42, depth: 0.5 },
  { name: 'Express', type: 'ink', shape: 'capsule', width: 1.25, height: 0.46, depth: 0.46 },
  { name: 'Firebase', type: 'glass', shape: 'box', width: 1.35, height: 0.42, depth: 0.5 },
  { name: 'MongoDB Atlas', type: 'ink', shape: 'box', width: 1.65, height: 0.42, depth: 0.55 },
  { name: 'Mobile Apps', type: 'glass', shape: 'capsule', width: 1.5, height: 0.46, depth: 0.46 },
  { name: 'Theatre.js', type: 'ink', shape: 'box', width: 1.42, height: 0.42, depth: 0.5 },
  { name: 'JavaScript', type: 'glass', shape: 'capsule', width: 1.38, height: 0.46, depth: 0.46 },
  { name: 'Design Systems', type: 'ink', shape: 'box', width: 1.65, height: 0.42, depth: 0.55 },
]

function SkillBlock({ item, initialPos }: { item: SkillItem; initialPos: [number, number, number] }) {
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'
  const isGlass = item.type === 'glass'
  const textColor = isGlass ? (isDark ? '#F4F3EF' : '#111115') : '#F4F3EF'

  return (
    <RigidBody
      colliders={false}
      position={initialPos}
      restitution={0.35}
      friction={0.7}
      linearDamping={0.4}
      angularDamping={0.5}
    >
      {/* Analytical primitive cuboid collider: 0ms convex-hull computation vs 2000ms */}
      <CuboidCollider args={[item.width / 2, item.height / 2, item.depth / 2]} />

      <group>
        {item.shape === 'box' ? (
          <RoundedBox
            args={[item.width, item.height, item.depth]}
            radius={0.08}
            smoothness={3}
            castShadow
            receiveShadow
          >
            {isGlass ? (
              <meshPhysicalMaterial
                color="#ffffff"
                roughness={0.14}
                transmission={0.92}
                thickness={0.7}
                ior={1.48}
                transparent
                opacity={0.92}
              />
            ) : (
              <meshStandardMaterial
                color="#111115"
                roughness={0.32}
                metalness={0.75}
              />
            )}
          </RoundedBox>
        ) : (
          /* Rounded 3D Capsule shape */
          <mesh castShadow receiveShadow rotation={[0, 0, Math.PI / 2]}>
            <capsuleGeometry args={[item.height / 2, item.width - item.height, 16, 24]} />
            {isGlass ? (
              <meshPhysicalMaterial
                color="#ffffff"
                roughness={0.14}
                transmission={0.92}
                thickness={0.7}
                ior={1.48}
                transparent
                opacity={0.92}
              />
            ) : (
              <meshStandardMaterial
                color="#111115"
                roughness={0.32}
                metalness={0.75}
              />
            )}
          </mesh>
        )}

        {/* 3D Label: Front Face */}
        <Text
          position={[0, 0, item.depth / 2 + 0.02]}
          fontSize={0.115}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.04}
        >
          {item.name}
        </Text>

        {/* 3D Label: Back Face */}
        <Text
          position={[0, 0, -item.depth / 2 - 0.02]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.115}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.04}
        >
          {item.name}
        </Text>
      </group>
    </RigidBody>
  )
}

function CursorKinematicCollider() {
  const cursorRef = useRef<RapierRigidBody>(null!)
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)

  useFrame((state) => {
    if (scrollProgress < 0.68 || !cursorRef.current) return

    // Project mouse cursor ray onto the pit depth plane (Z = -55.0)
    const vector = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5)
    vector.unproject(state.camera)
    const dir = vector.sub(state.camera.position).normalize()
    const targetZ = -55.0
    const distance = (targetZ - state.camera.position.z) / dir.z
    const targetWorldPos = state.camera.position.clone().add(dir.multiplyScalar(distance))

    // Smoothly set next kinematic translation to interact with skill blocks
    cursorRef.current.setNextKinematicTranslation({
      x: THREE.MathUtils.clamp(targetWorldPos.x, -5.0, 5.0),
      y: THREE.MathUtils.clamp(targetWorldPos.y, -1.5, 4.0),
      z: THREE.MathUtils.clamp(targetWorldPos.z, -58.0, -52.0),
    })
  })

  return (
    <RigidBody ref={cursorRef} type="kinematicPosition" colliders={false}>
      {/* Invisible kinematic interaction sphere */}
      <BallCollider args={[0.9]} />
    </RigidBody>
  )
}

export function PhysicsTechPit() {
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const isPhysicsActive = scrollProgress >= 0.68

  // Staggered initial spawn coordinates for the 16 skill blocks
  const spawnCoordinates: [number, number, number][] = useMemo(() => {
    return SKILL_ITEMS.map((_, i) => [
      ((i % 4) - 1.5) * 1.8 + (Math.random() - 0.5) * 0.4,
      0.8 + Math.floor(i / 4) * 0.9 + Math.random() * 0.3,
      Math.floor(i / 4) * 0.6 - 1.2 + (Math.random() - 0.5) * 0.3,
    ])
  }, [])

  return (
    <e.group theatreKey="PhysicsTechPit" position={[0, -2.5, -55.0]}>
      {/* 3D Header for the Physics Playground */}
      <group position={[0, 4.2, -3.8]}>
        <Text
          position={[0, 0.35, 0]}
          fontSize={0.4}
          color="#111115"
          letterSpacing={-0.03}
          anchorX="center"
          anchorY="middle"
        >
          TECHNICAL MATRIX & PHYSICS PIT
        </Text>
        <Text
          position={[0, -0.15, 0]}
          fontSize={0.13}
          color="#686870"
          letterSpacing={0.1}
          anchorX="center"
          anchorY="middle"
        >
          MOVE CURSOR ACROSS PIT TO SCATTER INTERACTIVE SKILL BLOCKS
        </Text>
      </group>

      {/* Frosted Pedestal Floor Plate */}
      <RoundedBox
        args={[10.0, 0.25, 9.0]}
        radius={0.15}
        smoothness={3}
        position={[0, -1.88, 0]}
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#F4F3EF"
          roughness={0.2}
          metalness={0.1}
          transmission={0.8}
          thickness={0.6}
        />
      </RoundedBox>

      {/* Rapier Physics World: paused when off-screen to save 100% physics CPU */}
      <Physics gravity={[0, -11.0, 0]} paused={!isPhysicsActive}>
        {/* Invisible Static Cuboid Colliders forming the containment pit */}
        {/* Floor */}
        <CuboidCollider position={[0, -1.8, 0]} args={[5.2, 0.2, 4.8]} />
        {/* Back Wall */}
        <CuboidCollider position={[0, 2.0, -4.2]} args={[5.2, 3.8, 0.3]} />
        {/* Front Wall */}
        <CuboidCollider position={[0, 2.0, 4.2]} args={[5.2, 3.8, 0.3]} />
        {/* Left Wall */}
        <CuboidCollider position={[-4.8, 2.0, 0]} args={[0.3, 3.8, 4.8]} />
        {/* Right Wall */}
        <CuboidCollider position={[4.8, 2.0, 0]} args={[0.3, 3.8, 4.8]} />

        {/* Kinematic cursor pusher */}
        <CursorKinematicCollider />

        {/* 16 Dynamic Procedural Skill Blocks */}
        {SKILL_ITEMS.map((item, idx) => (
          <SkillBlock
            key={item.name}
            item={item}
            initialPos={spawnCoordinates[idx]}
          />
        ))}
      </Physics>
    </e.group>
  )
}

export default PhysicsTechPit
