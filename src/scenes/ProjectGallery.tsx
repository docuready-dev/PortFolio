import { editable as e } from '@theatre/r3f'
import { Text } from '@react-three/drei'
import { usePortfolioStore } from '../store'
import { ProjectShaderPlane } from './ProjectShaderPlane'

const GRID_POSITIONS: [number, number, number][] = [
  [-2.5, 0.5, -34.0],  // 01: Atelier Kinetic (Graphic)
  [2.5, -0.4, -36.5],  // 02: Spatial Grid (Graphic)
  [-2.6, -0.2, -39.5], // 03: Hyperion Cloud (Web)
  [2.6, 0.6, -42.2],  // 04: Alabaster Archive (Web)
  [-2.5, 0.4, -45.2],  // 05: Aether OS (App)
  [2.5, -0.4, -48.0],  // 06: Voxel Pulse (App)
]

export function ProjectGallery() {
  const projects = usePortfolioStore((s) => s.projects)

  return (
    <e.group theatreKey="ProjectGallery">
      {/* Editorial Spatial Gallery Entrance Title */}
      <group position={[0, 3.2, -32.5]}>
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.42}
          color="#111115"
          letterSpacing={-0.03}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          SELECTED WORKS
        </Text>
        <Text
          position={[0, -0.22, 0]}
          fontSize={0.14}
          color="#686870"
          letterSpacing={0.12}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          SPATIAL ARCHIVE // 2025 — 2026 // CLICK TO INSPECT
        </Text>
      </group>

      {/* 6 Staggered 3D Spatial Grid Planes */}
      {projects.map((project, idx) => (
        <ProjectShaderPlane
          key={project.id}
          project={project}
          position={GRID_POSITIONS[idx]}
          index={idx}
        />
      ))}
    </e.group>
  )
}

export default ProjectGallery
