import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useScroll, Text, RoundedBox } from '@react-three/drei'
import type { ProjectItem } from '../types'
import { getProceduralProjectTexture } from '../utils/proceduralTextures'
import { ProjectMaterial, type ProjectMaterialImpl } from '../shaders/projectShader'
import { usePortfolioStore } from '../store'

interface ProjectShaderPlaneProps {
  project: ProjectItem
  position: [number, number, number]
  index: number
}

export function ProjectShaderPlane({ project, position, index }: ProjectShaderPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)

  const scroll = useScroll()
  const setActiveProject = usePortfolioStore((s) => s.setActiveProject)
  const theme = usePortfolioStore((s) => s.theme)
  const isDark = theme === 'dark'

  // Generate high-resolution procedural canvas texture
  const texture = useMemo(() => getProceduralProjectTexture(project), [project])

  // Instantiate the custom Drei shader material
  const material = useMemo(() => {
    const mat = new ProjectMaterial() as unknown as ProjectMaterialImpl
    mat.uTexture = texture
    mat.transparent = true
    return mat
  }, [texture])

  useFrame((state, delta) => {
    const safeDelta = Math.min(delta, 0.033)
    const t = state.clock.getElapsedTime()

    if (material) {
      // 1. Pass scroll velocity to vertex shader (smoothly damped)
      material.uScrollVelocity = THREE.MathUtils.damp(
        material.uScrollVelocity,
        scroll.delta,
        6.0,
        safeDelta,
      )

      // 2. Pass pointer hover transition (0 to 1)
      material.uHover = THREE.MathUtils.damp(
        material.uHover,
        hovered ? 1.0 : 0.0,
        7.0,
        safeDelta,
      )

      // 3. Time uniform for kinetic harmonic waves
      material.uTime = t
    }

    // Gentle floating idle tilt on plane group
    if (groupRef.current) {
      const hoverElev = hovered ? 0.35 : 0
      const idleFloat = Math.sin(t * 1.4 + index * 0.8) * 0.08
      groupRef.current.position.y = THREE.MathUtils.damp(
        groupRef.current.position.y,
        position[1] + idleFloat + hoverElev,
        4.0,
        safeDelta,
      )

      // Mouse tilt on hover
      const targetRotY = hovered ? (state.pointer.x * 0.15) : 0
      const targetRotX = hovered ? (-state.pointer.y * 0.15) : 0
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY,
        4.0,
        safeDelta,
      )
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        4.0,
        safeDelta,
      )
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Frosted Glass Backing Chassis / Frame */}
      <RoundedBox
        args={[3.28, 2.08, 0.04]}
        radius={0.06}
        smoothness={3}
        position={[0, 0, -0.025]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color={isDark ? '#23232a' : '#F4F3EF'}
          roughness={0.15}
          metalness={0.1}
          transmission={0.85}
          thickness={0.5}
          transparent
          opacity={0.9}
        />
      </RoundedBox>

      {/* Main Interactive Shader Plane */}
      <mesh
        ref={meshRef}
        material={material}
        onClick={(e) => {
          e.stopPropagation()
          setActiveProject(project)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHovered(false)
          document.body.style.cursor = 'auto'
        }}
        castShadow
      >
        {/* Subdivided PlaneGeometry so vertex curvature curves fluidly */}
        <planeGeometry args={[3.2, 2.0, 32, 32]} />
      </mesh>

      {/* Floating 3D Titles */}
      <group position={[0, -1.35, 0.1]}>
        {/* Project Number & Title */}
        <Text
          position={[-1.55, 0.05, 0]}
          anchorX="left"
          anchorY="middle"
          fontSize={0.22}
          color={isDark ? '#F4F3EF' : '#111115'}
          letterSpacing={-0.02}
          maxWidth={3.0}
        >
          {`${project.number}  ${project.title}`}
        </Text>

        {/* Subtitle / Category Label */}
        <Text
          position={[-1.55, -0.22, 0]}
          anchorX="left"
          anchorY="middle"
          fontSize={0.11}
          color={isDark ? '#94949e' : '#686870'}
          letterSpacing={0.05}
          maxWidth={3.0}
        >
          {`${project.category.toUpperCase()} // ${project.year}`}
        </Text>
      </group>
    </group>
  )
}

export default ProjectShaderPlane
