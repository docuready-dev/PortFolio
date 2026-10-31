import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, Text } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import { usePortfolioStore } from '../store'

export function HeroSculpture() {
  const outerGroupRef = useRef<THREE.Group>(null!)
  const ring1Ref = useRef<THREE.Mesh>(null!)
  const ring2Ref = useRef<THREE.Mesh>(null!)
  const icosahedronRef = useRef<THREE.Mesh>(null!)
  const octahedronCoreRef = useRef<THREE.Mesh>(null!)
  const satellitesRef = useRef<THREE.Group>(null!)

  const samples = usePortfolioStore((s) => s.transmissionSamples)
  const isShiftedLayout = usePortfolioStore((s) => s.isShiftedLayout)
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'
  const isVisible = scrollProgress < 0.35
  const { size } = useThree()

  useFrame((state, delta) => {
    // Frustum / Scroll Culling: skip calculations if hero sculpture is far behind camera
    if (!isVisible) return

    const safeDelta = Math.min(delta, 0.033)
    const aspect = size.width / Math.max(size.height, 1)
    const isDesktop = aspect >= 1.05

    // 0. Smooth responsive lateral shift along X axis (shifted to right side of editorial content on desktop)
    const isShifted = isShiftedLayout && isDesktop
    const targetX = isShifted ? 2.3 : 0.0
    const targetY = isShifted ? -0.1 : (isDesktop ? -0.1 : -0.25)
    const targetScale = isDesktop ? 0.95 : 0.82

    if (outerGroupRef.current) {
      outerGroupRef.current.position.x = THREE.MathUtils.damp(
        outerGroupRef.current.position.x,
        targetX,
        4.0,
        safeDelta,
      )
      outerGroupRef.current.position.y = THREE.MathUtils.damp(
        outerGroupRef.current.position.y,
        targetY,
        4.0,
        safeDelta,
      )
      const currentScale = outerGroupRef.current.scale.x
      const newScale = THREE.MathUtils.damp(currentScale, targetScale, 4.0, safeDelta)
      outerGroupRef.current.scale.setScalar(newScale)
    }

    // 1. Smooth mouse parallax damping on root sculpture group
    const targetParallaxX = (-state.pointer.y * Math.PI) / 7
    const targetParallaxY = (state.pointer.x * Math.PI) / 7

    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.x = THREE.MathUtils.damp(
        outerGroupRef.current.rotation.x,
        targetParallaxX,
        4.5,
        safeDelta,
      )
      outerGroupRef.current.rotation.y = THREE.MathUtils.damp(
        outerGroupRef.current.rotation.y,
        targetParallaxY,
        4.5,
        safeDelta,
      )
    }

    // 2. Kinetic rotations across interlocking axes
    const t = state.clock.getElapsedTime()

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += safeDelta * 0.35
      ring1Ref.current.rotation.y += safeDelta * 0.2
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= safeDelta * 0.45
      ring2Ref.current.rotation.z += safeDelta * 0.25
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = Math.sin(t * 0.6) * 0.4
      icosahedronRef.current.rotation.y += safeDelta * 0.5
      icosahedronRef.current.rotation.z = Math.cos(t * 0.5) * 0.3
    }

    if (octahedronCoreRef.current) {
      octahedronCoreRef.current.rotation.x -= safeDelta * 0.8
      octahedronCoreRef.current.rotation.y += safeDelta * 0.9
      octahedronCoreRef.current.scale.setScalar(
        0.55 + Math.sin(t * 2.0) * 0.05,
      )
    }

    if (satellitesRef.current) {
      satellitesRef.current.rotation.y += safeDelta * 0.25
      satellitesRef.current.rotation.x = Math.sin(t * 0.4) * 0.2
    }
  })

  return (
    <e.group theatreKey="HeroSculpture" position={[0, 0, 0]} visible={isVisible}>
      <group ref={outerGroupRef}>
        {/* Outer Gimbal Ring (TorusGeometry) */}
        <mesh ref={ring1Ref} castShadow receiveShadow>
          <torusGeometry args={[2.3, 0.12, 32, 100]} />
          <meshStandardMaterial
            color="#111115"
            metalness={0.85}
            roughness={0.25}
          />
        </mesh>

        {/* Middle Gimbal Ring (TorusGeometry) */}
        <mesh
          ref={ring2Ref}
          rotation={[Math.PI / 4, Math.PI / 6, 0]}
          castShadow
          receiveShadow
        >
          <torusGeometry args={[1.75, 0.09, 32, 100]} />
          <meshStandardMaterial
            color="#3a3a42"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Central Refractive Glass Kinetic Body (IcosahedronGeometry) */}
        <mesh ref={icosahedronRef} castShadow receiveShadow>
          <icosahedronGeometry args={[1.1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={samples}
            resolution={512}
            thickness={1.2}
            chromaticAberration={0.06}
            anisotropy={0.3}
            distortion={0.2}
            roughness={0.12}
            transmission={1.0}
            ior={1.52}
            color="#ffffff"
            attenuationColor="#f4f3ef"
            attenuationDistance={1.0}
          />
        </mesh>

        {/* Inner Kinetic Anchor Core (OctahedronGeometry) */}
        <mesh ref={octahedronCoreRef} castShadow>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#111115"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        {/* Orbiting Satellite Octahedra */}
        <group ref={satellitesRef}>
          <mesh position={[2.8, 0.8, 0.4]}>
            <octahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.7} />
          </mesh>
          <mesh position={[-2.6, -1.0, -0.6]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial color="#3b82f6" roughness={0.2} metalness={0.8} />
          </mesh>
          <mesh position={[0.4, 2.7, -0.8]}>
            <octahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial color="#111115" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>

        {/* 3D Kinetic Identity Tag: Ashley Ajoy Ghose & ॲशले घोष */}
        <group position={[0, 1.55, 1.1]}>
          <Text
            position={[0, 0.18, 0]}
            fontSize={0.18}
            color={isDark ? '#F4F3EF' : '#111115'}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.06}
          >
            ASHLEY AJOY GHOSE
          </Text>
          <Text
            position={[0, -0.05, 0]}
            fontSize={0.14}
            color="#f59e0b"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.02}
          >
            ॲशले घोष
          </Text>
          <Text
            position={[0, -0.24, 0]}
            fontSize={0.088}
            color={isDark ? '#818cf8' : '#686870'}
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.12}
          >
            CODE // CRAFT // DIGITAL ARCHITECTURE
          </Text>
        </group>
      </group>
    </e.group>
  )
}

export default HeroSculpture
