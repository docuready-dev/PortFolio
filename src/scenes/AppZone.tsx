import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, MeshTransmissionMaterial } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import { usePortfolioStore } from '../store'

const NODE_CONFIG = [
  { radius: 2.4, speed: 0.8, offset: 0, heightScale: 1.4, color: '#3b82f6' },
  { radius: 2.8, speed: -0.7, offset: 1.1, heightScale: 1.6, color: '#f59e0b' },
  { radius: 3.2, speed: 0.9, offset: 2.3, heightScale: 1.2, color: '#111115' },
  { radius: 2.5, speed: -1.1, offset: 3.5, heightScale: 1.8, color: '#ec4899' },
  { radius: 3.0, speed: 0.6, offset: 4.7, heightScale: 1.3, color: '#3b82f6' },
  { radius: 3.4, speed: -0.8, offset: 5.8, heightScale: 1.7, color: '#10b981' },
]

export function AppZone() {
  const phoneRef = useRef<THREE.Group>(null!)
  const nodesGroupRef = useRef<THREE.Group>(null!)
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([])
  const radialLineGeomRefs = useRef<(THREE.BufferGeometry | null)[]>([])
  const ringLineGeomRefs = useRef<(THREE.BufferGeometry | null)[]>([])

  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const isVisible = scrollProgress >= 0.40 && scrollProgress < 0.85

  useFrame((state) => {
    if (!isVisible) return
    const t = state.clock.getElapsedTime()

    // Smooth subtle floating & tilt on smartphone chassis
    if (phoneRef.current) {
      phoneRef.current.position.y = Math.sin(t * 1.2) * 0.15
      phoneRef.current.rotation.y = Math.sin(t * 0.5) * 0.25 + 0.15
      phoneRef.current.rotation.x = Math.cos(t * 0.6) * 0.1
    }

    // Update orbiting node positions directly on Three.js objects (0 React re-renders)
    const coords: [number, number, number][] = []
    for (let i = 0; i < NODE_CONFIG.length; i++) {
      const c = NODE_CONFIG[i]
      const angle = t * c.speed + c.offset
      const x = Math.cos(angle) * c.radius
      const y = Math.sin(angle * 1.3) * c.heightScale
      const z = Math.sin(angle) * c.radius
      coords.push([x, y, z])

      const mesh = nodeRefs.current[i]
      if (mesh) {
        mesh.position.set(x, y, z)
      }

      const radialGeom = radialLineGeomRefs.current[i]
      if (radialGeom) {
        const posAttr = radialGeom.getAttribute('position') as THREE.BufferAttribute
        if (posAttr) {
          posAttr.setXYZ(1, x, y, z)
          posAttr.needsUpdate = true
        }
      }
    }

    // Update ring lines connecting adjacent orbiting nodes
    for (let i = 0; i < NODE_CONFIG.length; i++) {
      const ringGeom = ringLineGeomRefs.current[i]
      if (ringGeom) {
        const posAttr = ringGeom.getAttribute('position') as THREE.BufferAttribute
        if (posAttr) {
          const cur = coords[i]
          const next = coords[(i + 1) % NODE_CONFIG.length]
          posAttr.setXYZ(0, cur[0], cur[1], cur[2])
          posAttr.setXYZ(1, next[0], next[1], next[2])
          posAttr.needsUpdate = true
        }
      }
    }
  })

  return (
    <e.group theatreKey="AppZone" position={[3.8, -2.5, -27]} visible={isVisible}>
      {/* ============================================================ */}
      {/* 1. PROCEDURAL 3D SMARTPHONE CHASSIS                         */}
      {/* ============================================================ */}
      <group ref={phoneRef}>
        {/* Outer Titanium Chassis */}
        <RoundedBox args={[2.0, 4.2, 0.16]} radius={0.24} smoothness={4} castShadow>
          <meshStandardMaterial
            color="#18181c"
            metalness={0.88}
            roughness={0.22}
          />
        </RoundedBox>

        {/* Outer Edge Polish Rim */}
        <RoundedBox args={[2.02, 4.22, 0.08]} radius={0.25} smoothness={4}>
          <meshStandardMaterial
            color="#34343a"
            metalness={0.95}
            roughness={0.15}
          />
        </RoundedBox>

        {/* Front Display Screen: Optical Frosted Physical Glass */}
        <RoundedBox
          args={[1.9, 4.08, 0.02]}
          radius={0.22}
          smoothness={3}
          position={[0, 0, 0.082]}
        >
          <MeshTransmissionMaterial
            backside={false}
            samples={3}
            resolution={256}
            thickness={0.35}
            chromaticAberration={0.04}
            roughness={0.08}
            transmission={0.92}
            ior={1.5}
            color="#ffffff"
          />
        </RoundedBox>

        {/* Dynamic Island Pill */}
        <RoundedBox
          args={[0.5, 0.12, 0.015]}
          radius={0.06}
          smoothness={3}
          position={[0, 1.82, 0.095]}
        >
          <meshBasicMaterial color="#050508" />
        </RoundedBox>

        {/* Sub-Surface App UI Elements */}
        <group position={[0, 0, 0.075]}>
          {/* Header Profile Avatar & Welcome Banner */}
          <mesh position={[-0.6, 1.45, 0]}>
            <circleGeometry args={[0.15, 32]} />
            <meshStandardMaterial color="#f59e0b" />
          </mesh>
          <RoundedBox args={[0.9, 0.1, 0.01]} radius={0.04} position={[0.15, 1.45, 0]}>
            <meshStandardMaterial color="#111115" />
          </RoundedBox>

          {/* Primary Metrics Graph Card */}
          <RoundedBox args={[1.65, 1.1, 0.015]} radius={0.1} position={[0, 0.7, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.1} />
          </RoundedBox>
          {/* Sparkline wireframe */}
          <mesh position={[0, 0.7, 0.01]}>
            <boxGeometry args={[1.3, 0.05, 0.01]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>

          {/* Secondary Stacked Widgets */}
          <RoundedBox args={[0.78, 0.75, 0.015]} radius={0.08} position={[-0.43, -0.35, 0]}>
            <meshStandardMaterial color="#111115" metalness={0.7} />
          </RoundedBox>
          <RoundedBox args={[0.78, 0.75, 0.015]} radius={0.08} position={[0.43, -0.35, 0]}>
            <meshStandardMaterial color="#EAE8E3" />
          </RoundedBox>

          {/* Bottom Navigation Dock */}
          <RoundedBox args={[1.5, 0.28, 0.015]} radius={0.1} position={[0, -1.6, 0]}>
            <meshStandardMaterial color="#111115" />
          </RoundedBox>
        </group>

        {/* Camera Bump & Triple Lenses on Rear */}
        <group position={[-0.45, 1.4, -0.09]}>
          <RoundedBox args={[0.75, 0.75, 0.04]} radius={0.16} smoothness={3}>
            <meshStandardMaterial color="#222228" metalness={0.8} />
          </RoundedBox>
          <mesh position={[-0.18, 0.18, -0.03]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.03, 24]} />
            <meshStandardMaterial color="#0b0b0e" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[0.18, 0.18, -0.03]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.03, 24]} />
            <meshStandardMaterial color="#0b0b0e" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[0, -0.18, -0.03]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.12, 0.12, 0.03, 24]} />
            <meshStandardMaterial color="#0b0b0e" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      </group>

      {/* ============================================================ */}
      {/* 2. ORBITING PROCEDURAL DATA NODES & LINE SPLINES             */}
      {/* ============================================================ */}
      <group ref={nodesGroupRef}>
        {NODE_CONFIG.map((config, idx) => {
          const initAngle = config.offset
          const initX = Math.cos(initAngle) * config.radius
          const initY = Math.sin(initAngle * 1.3) * config.heightScale
          const initZ = Math.sin(initAngle) * config.radius
          const radialPositions = new Float32Array([0, 0, 0, initX, initY, initZ])

          const nextConfig = NODE_CONFIG[(idx + 1) % NODE_CONFIG.length]
          const nextAngle = nextConfig.offset
          const nextInitX = Math.cos(nextAngle) * nextConfig.radius
          const nextInitY = Math.sin(nextAngle * 1.3) * nextConfig.heightScale
          const nextInitZ = Math.sin(nextAngle) * nextConfig.radius
          const ringPositions = new Float32Array([initX, initY, initZ, nextInitX, nextInitY, nextInitZ])

          return (
            <group key={idx}>
              {/* Connecting Spline Line from Smartphone to Node */}
              <line>
                <bufferGeometry
                  ref={(el) => {
                    radialLineGeomRefs.current[idx] = el
                  }}
                >
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={radialPositions}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color={config.color} transparent opacity={0.5} />
              </line>

              {/* Cross-linking splines between adjacent orbiting nodes */}
              <line>
                <bufferGeometry
                  ref={(el) => {
                    ringLineGeomRefs.current[idx] = el
                  }}
                >
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={ringPositions}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#686870" transparent opacity={0.3} />
              </line>

              {/* Orbiting Procedural Data Node */}
              <mesh
                ref={(el) => {
                  nodeRefs.current[idx] = el
                }}
                position={[initX, initY, initZ]}
              >
                <octahedronGeometry args={[0.16, 0]} />
                <meshStandardMaterial
                  color={config.color}
                  metalness={0.85}
                  roughness={0.2}
                />
              </mesh>
            </group>
          )
        })}
      </group>
    </e.group>
  )
}

export default AppZone
