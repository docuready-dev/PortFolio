import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import { ChromaticRingShader } from '../shaders/chromaticRingShader'
import { usePortfolioStore } from '../store'

export function GraphicZone() {
  const groupRef = useRef<THREE.Group>(null!)
  const ringRef1 = useRef<THREE.Mesh>(null!)
  const ringRef2 = useRef<THREE.Mesh>(null!)
  const prism1Ref = useRef<THREE.Mesh>(null!)
  const prism2Ref = useRef<THREE.Mesh>(null!)
  const prism3Ref = useRef<THREE.Mesh>(null!)

  const scrollProgress = usePortfolioStore((s) => s.scrollProgress)
  const isVisible = scrollProgress >= 0.05 && scrollProgress < 0.50

  // Custom shader material instance for the chromatic rings
  const ringMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: ChromaticRingShader.vertexShader,
      fragmentShader: ChromaticRingShader.fragmentShader,
      uniforms: THREE.UniformsUtils.clone(ChromaticRingShader.uniforms),
      transparent: true,
      side: THREE.DoubleSide,
    })
  }, [])

  useFrame((state, delta) => {
    if (!isVisible) return
    const safeDelta = Math.min(delta, 0.033)
    const t = state.clock.getElapsedTime()

    // Update custom GLSL shader time uniform
    if (ringMaterial.uniforms?.uTime) {
      ringMaterial.uniforms.uTime.value = t
    }

    // Kinetic rotation of chromatic rings
    if (ringRef1.current) {
      ringRef1.current.rotation.z += safeDelta * 0.4
      ringRef1.current.rotation.x = Math.sin(t * 0.7) * 0.35
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.z -= safeDelta * 0.5
      ringRef2.current.rotation.y = Math.cos(t * 0.6) * 0.4
    }

    // Floating animation of procedural extruded prisms
    if (prism1Ref.current) {
      prism1Ref.current.position.y = 0.5 + Math.sin(t * 1.8) * 0.2
      prism1Ref.current.rotation.x += safeDelta * 0.3
      prism1Ref.current.rotation.y += safeDelta * 0.4
    }
    if (prism2Ref.current) {
      prism2Ref.current.position.y = -0.6 + Math.sin(t * 1.5 + 1.2) * 0.22
      prism2Ref.current.rotation.y -= safeDelta * 0.45
      prism2Ref.current.rotation.z += safeDelta * 0.25
    }
    if (prism3Ref.current) {
      prism3Ref.current.position.y = 0.9 + Math.cos(t * 1.6 + 2.4) * 0.18
      prism3Ref.current.rotation.x -= safeDelta * 0.35
      prism3Ref.current.rotation.z += safeDelta * 0.3
    }
  })

  return (
    <e.group theatreKey="GraphicZone" position={[4.5, -0.5, -9]} visible={isVisible}>
      <group ref={groupRef}>
        {/* Primary Rotating Chromatic Color Ring */}
        <mesh ref={ringRef1} material={ringMaterial}>
          <torusGeometry args={[1.9, 0.08, 32, 100]} />
        </mesh>

        {/* Secondary Orthogonal Chromatic Color Ring */}
        <mesh ref={ringRef2} material={ringMaterial} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.45, 0.06, 32, 80]} />
        </mesh>

        {/* Procedural Extruded Triangular Prism 1: Frosted Physical Glass */}
        <mesh ref={prism1Ref} position={[-1.2, 0.5, 0.6]} castShadow>
          <cylinderGeometry args={[0.7, 0.7, 1.8, 3]} />
          <MeshTransmissionMaterial
            backside={false}
            samples={3}
            resolution={256}
            thickness={0.9}
            chromaticAberration={0.05}
            roughness={0.15}
            transmission={0.95}
            ior={1.45}
            color="#ffffff"
          />
        </mesh>

        {/* Procedural Extruded Triangular Prism 2: Deep Ink Carbon */}
        <mesh ref={prism2Ref} position={[1.4, -0.6, -0.4]} castShadow>
          <cylinderGeometry args={[0.55, 0.55, 1.6, 3]} />
          <meshStandardMaterial
            color="#111115"
            metalness={0.8}
            roughness={0.25}
          />
        </mesh>

        {/* Procedural Extruded Triangular Prism 3: Pure Alabaster Matte */}
        <mesh ref={prism3Ref} position={[0.2, 1.0, -1.0]} castShadow>
          <cylinderGeometry args={[0.45, 0.45, 1.2, 3]} />
          <meshStandardMaterial
            color="#F4F3EF"
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Floating Faceted Diamond Prisms */}
        <mesh position={[-2.0, -0.8, -0.8]}>
          <octahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[2.2, 1.2, 0.5]}>
          <octahedronGeometry args={[0.25, 0]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </e.group>
  )
}

export default GraphicZone
