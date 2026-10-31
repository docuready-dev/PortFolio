import { useEffect } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { preloadFont } from 'troika-three-text'
import { pregenerateAllProjectTextures } from '../utils/proceduralTextures'
import { FLAGSHIP_PROJECTS } from '../store'

// 1. Pre-generate all Swiss poster CanvasTextures upfront at module load
pregenerateAllProjectTextures(FLAGSHIP_PROJECTS)

// 2. Pre-rasterize and cache all font glyph SDF atlases upfront
preloadFont(
  {
    characters:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/.-—: ',
  },
  () => {},
)

const WAYPOINTS = [
  { pos: new THREE.Vector3(0, 0, 7), target: new THREE.Vector3(0, 0, 0) },
  { pos: new THREE.Vector3(2.2, 0.0, -3.5), target: new THREE.Vector3(2.2, -0.5, -9.0) },
  { pos: new THREE.Vector3(-1.9, -1.0, -12.5), target: new THREE.Vector3(-1.9, -1.5, -18.0) },
  { pos: new THREE.Vector3(1.6, -2.0, -21.5), target: new THREE.Vector3(1.6, -2.5, -27.0) },
  { pos: new THREE.Vector3(0, 0.3, -37.5), target: new THREE.Vector3(0, 0.0, -43.0) },
  { pos: new THREE.Vector3(0, 1.2, -49.5), target: new THREE.Vector3(0, -1.6, -55.0) },
]

/**
 * ScenePreloader performs a zero-jank WebGL pipeline compilation across all 6
 * spatial zones on initial mount:
 * 1. Temporarily enables visibility and disables frustum culling across all scene meshes.
 * 2. Compiles every shader, physical transmission material, and custom GLSL program
 *    from each camera waypoint along the 6-page trajectory.
 * 3. Restores original visibility and frustum culling states.
 * This guarantees buttery-smooth 60 FPS scrolling with zero mid-scroll shader compilation stalls.
 */
export function ScenePreloader() {
  const { gl, scene } = useThree()

  useEffect(() => {
    const hidden: THREE.Object3D[] = []
    const culled: THREE.Mesh[] = []

    // 1. Temporarily uncover all culling groups and disable frustum culling
    scene.traverse((obj) => {
      if (!obj.visible) {
        hidden.push(obj)
        obj.visible = true
      }
      if ((obj as THREE.Mesh).isMesh && (obj as THREE.Mesh).frustumCulled) {
        culled.push(obj as THREE.Mesh)
        ;(obj as THREE.Mesh).frustumCulled = false
      }
    })

    const tempCam = new THREE.PerspectiveCamera(75, 1.5, 0.1, 100)

    // 2. Pre-compile and upload all GPU textures, VBOs, and shaders along the camera trajectory
    for (const wp of WAYPOINTS) {
      tempCam.position.copy(wp.pos)
      tempCam.lookAt(wp.target)
      tempCam.updateMatrixWorld()
      try {
        gl.compile(scene, tempCam)
        // Render 1 frame from each waypoint to force GPU upload of CanvasTextures, VBOs, and text glyphs
        gl.render(scene, tempCam)
      } catch (err) {
        console.warn('Pre-compilation notice:', err)
      }
    }

    // 3. Restore visibility and frustum culling states
    for (const obj of hidden) {
      obj.visible = false
    }
    for (const mesh of culled) {
      mesh.frustumCulled = true
    }
  }, [gl, scene])

  return null
}

export default ScenePreloader
