import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, MeshTransmissionMaterial, useScroll } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import { usePortfolioStore } from '../store'

export function WebZone() {
  const layer1Ref = useRef<THREE.Group>(null!)
  const layer2Ref = useRef<THREE.Group>(null!)
  const layer3Ref = useRef<THREE.Group>(null!)
  const layer4Ref = useRef<THREE.Group>(null!)
  const rootGroupRef = useRef<THREE.Group>(null!)

  const scroll = useScroll()
  const samples = usePortfolioStore((s) => s.transmissionSamples)
  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const isVisible = scrollProgress >= 0.20 && scrollProgress < 0.70

  useFrame((_, delta) => {
    if (!isVisible) return
    const safeDelta = Math.min(delta, 0.033)

    // Calculate separation factor based on scroll offset entering WebZone (~0.3 to ~0.6)
    const targetSeparation = THREE.MathUtils.clamp((scroll.offset - 0.25) * 3.5, 0, 1.2)

    // Smoothly separate wireframe layers along Z space
    if (layer1Ref.current) {
      layer1Ref.current.position.z = THREE.MathUtils.damp(
        layer1Ref.current.position.z,
        0.08 + targetSeparation * 0.35,
        4.0,
        safeDelta,
      )
    }

    if (layer2Ref.current) {
      layer2Ref.current.position.z = THREE.MathUtils.damp(
        layer2Ref.current.position.z,
        0.16 + targetSeparation * 0.75,
        4.0,
        safeDelta,
      )
    }

    if (layer3Ref.current) {
      layer3Ref.current.position.z = THREE.MathUtils.damp(
        layer3Ref.current.position.z,
        0.24 + targetSeparation * 1.25,
        4.0,
        safeDelta,
      )
    }

    if (layer4Ref.current) {
      layer4Ref.current.position.z = THREE.MathUtils.damp(
        layer4Ref.current.position.z,
        0.32 + targetSeparation * 1.85,
        4.0,
        safeDelta,
      )
    }

    // Subtle gentle floating tilt
    if (rootGroupRef.current) {
      rootGroupRef.current.rotation.y = THREE.MathUtils.damp(
        rootGroupRef.current.rotation.y,
        -0.08 + (scroll.offset - 0.4) * 0.2,
        3.0,
        safeDelta,
      )
    }
  })

  return (
    <e.group theatreKey="WebZone" position={[-4.2, -1.5, -18]} visible={isVisible}>
      <group ref={rootGroupRef}>
        {/* ============================================================ */}
        {/* 1. CENTRAL HERO BROWSER WINDOW WITH EXPLODING WIREFRAME UI   */}
        {/* ============================================================ */}
        <group position={[0, 0, 0]}>
          {/* Main Frosted Glass Chassis */}
          <RoundedBox args={[3.8, 2.5, 0.08]} radius={0.1} smoothness={4} castShadow>
            <MeshTransmissionMaterial
              backside={false}
              samples={samples}
              resolution={512}
              thickness={0.8}
              chromaticAberration={0.04}
              roughness={0.16}
              transmission={0.94}
              ior={1.48}
              color="#ffffff"
            />
          </RoundedBox>

          {/* Browser Window Header: Window Control Dots */}
          <group position={[-1.6, 1.05, 0.05]}>
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#ef4444" />
            </mesh>
            <mesh position={[0.13, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#f59e0b" />
            </mesh>
            <mesh position={[0.26, 0, 0]}>
              <sphereGeometry args={[0.045, 16, 16]} />
              <meshBasicMaterial color="#10b981" />
            </mesh>
          </group>

          {/* Address Bar Pill */}
          <RoundedBox
            args={[1.6, 0.12, 0.02]}
            radius={0.05}
            smoothness={3}
            position={[0, 1.05, 0.055]}
          >
            <meshStandardMaterial color="#E8E7E2" roughness={0.3} />
          </RoundedBox>

          {/* Layer 1: Navigation Bar Wireframe */}
          <group ref={layer1Ref} position={[0, 0.75, 0.08]}>
            <RoundedBox args={[3.3, 0.18, 0.015]} radius={0.04} smoothness={2}>
              <meshStandardMaterial
                color="#111115"
                roughness={0.2}
                metalness={0.7}
              />
            </RoundedBox>
            {/* Nav Menu Wireframe Pills */}
            <mesh position={[-1.0, 0, 0.015]}>
              <boxGeometry args={[0.4, 0.06, 0.01]} />
              <meshStandardMaterial color="#8E8E93" />
            </mesh>
            <mesh position={[-0.4, 0, 0.015]}>
              <boxGeometry args={[0.4, 0.06, 0.01]} />
              <meshStandardMaterial color="#8E8E93" />
            </mesh>
            <mesh position={[1.1, 0, 0.015]}>
              <boxGeometry args={[0.5, 0.09, 0.01]} />
              <meshStandardMaterial color="#3b82f6" />
            </mesh>
          </group>

          {/* Layer 2: Hero Content & Editorial Headline Wireframe */}
          <group ref={layer2Ref} position={[-0.6, 0.1, 0.16]}>
            <RoundedBox args={[2.0, 0.75, 0.02]} radius={0.06} smoothness={3}>
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.1}
                metalness={0.1}
                transparent
                opacity={0.85}
              />
            </RoundedBox>
            {/* Bold Headline Wireframe Lines */}
            <mesh position={[-0.2, 0.15, 0.02]}>
              <boxGeometry args={[1.4, 0.08, 0.01]} />
              <meshStandardMaterial color="#111115" />
            </mesh>
            <mesh position={[-0.35, 0.0, 0.02]}>
              <boxGeometry args={[1.1, 0.06, 0.01]} />
              <meshStandardMaterial color="#686870" />
            </mesh>
            <mesh position={[-0.45, -0.15, 0.02]}>
              <boxGeometry args={[0.8, 0.08, 0.01]} />
              <meshStandardMaterial color="#f59e0b" />
            </mesh>
          </group>

          {/* Layer 3: Feature Media Card Grid Wireframe */}
          <group ref={layer3Ref} position={[0.95, 0.05, 0.24]}>
            <RoundedBox args={[1.1, 0.9, 0.025]} radius={0.07} smoothness={3}>
              <meshStandardMaterial
                color="#111115"
                roughness={0.2}
                metalness={0.85}
              />
            </RoundedBox>
            {/* Accent Glowing Indicator */}
            <mesh position={[0, 0, 0.02]}>
              <torusGeometry args={[0.22, 0.03, 16, 32]} />
              <meshStandardMaterial color="#3b82f6" roughness={0.2} />
            </mesh>
          </group>

          {/* Layer 4: Floating Interactive Modal / CTA Pill */}
          <group ref={layer4Ref} position={[0, -0.65, 0.32]}>
            <RoundedBox args={[2.8, 0.38, 0.03]} radius={0.08} smoothness={3}>
              <meshPhysicalMaterial
                roughness={0.14}
                thickness={0.5}
                transmission={0.92}
                ior={1.48}
                color="#ffffff"
                transparent
                opacity={0.92}
              />
            </RoundedBox>
            <mesh position={[0, 0, 0.02]}>
              <boxGeometry args={[1.6, 0.08, 0.01]} />
              <meshStandardMaterial color="#111115" />
            </mesh>
          </group>
        </group>

        {/* ============================================================ */}
        {/* 2. SECONDARY LEFT ANGLED BROWSER WINDOW                     */}
        {/* ============================================================ */}
        <group position={[-2.8, -0.3, -1.4]} rotation={[0, 0.35, 0]}>
          <RoundedBox args={[2.4, 1.8, 0.06]} radius={0.08} smoothness={3}>
            <meshPhysicalMaterial
              roughness={0.18}
              thickness={0.6}
              transmission={0.9}
              ior={1.48}
              color="#F4F3EF"
              transparent
              opacity={0.88}
            />
          </RoundedBox>
          {/* Wireframe lines */}
          <mesh position={[-0.4, 0.2, 0.04]}>
            <boxGeometry args={[1.2, 0.08, 0.01]} />
            <meshStandardMaterial color="#686870" />
          </mesh>
          <mesh position={[-0.2, -0.1, 0.04]}>
            <boxGeometry args={[1.5, 0.3, 0.01]} />
            <meshStandardMaterial color="#111115" opacity={0.6} transparent />
          </mesh>
        </group>

        {/* ============================================================ */}
        {/* 3. SECONDARY RIGHT ANGLED BROWSER WINDOW                    */}
        {/* ============================================================ */}
        <group position={[2.7, 0.4, -1.6]} rotation={[0, -0.32, 0]}>
          <RoundedBox args={[2.3, 1.7, 0.06]} radius={0.08} smoothness={3}>
            <meshPhysicalMaterial
              roughness={0.18}
              thickness={0.6}
              transmission={0.9}
              ior={1.48}
              color="#F4F3EF"
              transparent
              opacity={0.88}
            />
          </RoundedBox>
          <mesh position={[0, 0, 0.04]}>
            <boxGeometry args={[1.6, 0.8, 0.01]} />
            <meshStandardMaterial color="#111115" opacity={0.4} transparent />
          </mesh>
        </group>
      </group>
    </e.group>
  )
}

export default WebZone
