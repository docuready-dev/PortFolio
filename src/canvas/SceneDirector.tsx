import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll, PerspectiveCamera } from '@react-three/drei'
import { editable as e } from '@theatre/r3f'
import type { ISheet } from '@theatre/core'
import { usePortfolioStore } from '../store'
import { StudioLighting } from './StudioLighting'
import { HeroSculpture } from '../scenes/HeroSculpture'
import { DomainZones } from '../scenes/DomainZones'
import { ProjectGallery } from '../scenes/ProjectGallery'
import { PhysicsTechPit } from '../scenes/PhysicsTechPit'

// Wrap Drei's PerspectiveCamera with Theatre.js editable
const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')

interface SceneDirectorProps {
  sheet?: ISheet
}

export function SceneDirector({ sheet }: SceneDirectorProps) {
  const scroll = useScroll()
  const { camera, size } = useThree()
  const setScrollProgress = usePortfolioStore((s) => s.setScrollProgress)
  const setActiveDomain = usePortfolioStore((s) => s.setActiveDomain)
  const isShiftedLayout = usePortfolioStore((s) => s.isShiftedLayout)

  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0))

  // Expose scroll object on window for debugging & navigation jumps
  if (typeof window !== 'undefined') {
    ;(window as any).__DREI_SCROLL__ = scroll
  }

  // 1. Responsive camera FOV adjustment: automatically widens for mobile portrait screens
  const aspect = size.width / Math.max(size.height, 1)
  const isDesktop = aspect >= 1.05
  const isShifted = isShiftedLayout && isDesktop

  const responsiveFov = useMemo(() => {
    if (aspect < 0.75) {
      // Mobile portrait viewports (iPhone, Pixel: ~0.45 - 0.65 aspect)
      return 68
    } else if (aspect < 1.15) {
      // Tablets and square viewports
      return 56
    }
    // Desktop wide perspective
    return 45
  }, [aspect])

  // Update camera projection on aspect ratio or responsive FOV change
  useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = responsiveFov
      camera.updateProjectionMatrix()
    }
  }, [camera, responsiveFov])

  // 2. Programmatic 3D CatmullRom spline waypoints across the 6 scroll pages
  // Dynamically shifts 3D zones to the complementary side of the written text on desktop
  const { cameraSpline, targetSpline } = useMemo(() => {
    const camPoints = isShifted
      ? [
          new THREE.Vector3(0, 0, 7),           // Page 1: Hero (scroll 0.00)
          new THREE.Vector3(2.2, 0.0, -3.5),    // Page 2: Graphic (scroll 0.20)
          new THREE.Vector3(-1.9, -1.0, -12.5), // Page 3: Web (scroll 0.40)
          new THREE.Vector3(1.6, -2.0, -21.5),  // Page 4: App (scroll 0.60)
          new THREE.Vector3(0, 0.3, -37.5),     // Page 5: Selected Works (scroll 0.80)
          new THREE.Vector3(0, 1.2, -49.5),     // Page 6: Physics Tech Pit (scroll 1.00)
        ]
      : [
          new THREE.Vector3(0, 0, 7),           // Page 1: Hero (scroll 0.00)
          new THREE.Vector3(4.5, 0.0, -3.5),    // Page 2: Graphic (scroll 0.20)
          new THREE.Vector3(-4.2, -1.0, -12.5), // Page 3: Web (scroll 0.40)
          new THREE.Vector3(3.8, -2.0, -21.5),  // Page 4: App (scroll 0.60)
          new THREE.Vector3(0, 0.3, -37.5),     // Page 5: Selected Works (scroll 0.80)
          new THREE.Vector3(0, 1.2, -49.5),     // Page 6: Physics Tech Pit (scroll 1.00)
        ]

    const lookPoints = isShifted
      ? [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(2.2, -0.5, -9.0),
          new THREE.Vector3(-1.9, -1.5, -18.0),
          new THREE.Vector3(1.6, -2.5, -27.0),
          new THREE.Vector3(0, 0.0, -43.0),
          new THREE.Vector3(0, -1.6, -55.0),
        ]
      : [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(4.5, -0.5, -9.0),
          new THREE.Vector3(-4.2, -1.5, -18.0),
          new THREE.Vector3(3.8, -2.5, -27.0),
          new THREE.Vector3(0, 0.0, -43.0),
          new THREE.Vector3(0, -1.6, -55.0),
        ]

    return {
      cameraSpline: new THREE.CatmullRomCurve3(camPoints),
      targetSpline: new THREE.CatmullRomCurve3(lookPoints),
    }
  }, [isShifted])

  useFrame((_, delta) => {
    const safeDelta = Math.min(delta, 0.033)

    // 1. Sync Theatre.js sequence timeline (in seconds) to Drei scroll offset
    if (sheet && sheet.sequence) {
      sheet.sequence.position = scroll.offset * 6
    }

    // 2. Set scroll progress & velocity in Zustand
    setScrollProgress(scroll.offset, scroll.delta)

    // 3. Update active creative domain in Zustand based on scroll depth
    if (scroll.offset < 0.10) {
      setActiveDomain('all')
    } else if (scroll.offset >= 0.10 && scroll.offset < 0.30) {
      setActiveDomain('graphic')
    } else if (scroll.offset >= 0.30 && scroll.offset < 0.50) {
      setActiveDomain('web')
    } else if (scroll.offset >= 0.50 && scroll.offset < 0.70) {
      setActiveDomain('app')
    } else {
      setActiveDomain('all')
    }

    // 4. Smooth responsive FOV damping
    if (camera instanceof THREE.PerspectiveCamera) {
      if (Math.abs(camera.fov - responsiveFov) > 0.05) {
        camera.fov = THREE.MathUtils.damp(camera.fov, responsiveFov, 3.5, safeDelta)
        camera.updateProjectionMatrix()
      }
    }

    // 5. Default programmatic camera interpolation as a baseline
    const t = THREE.MathUtils.clamp(scroll.offset, 0, 1)
    const targetCamPos = cameraSpline.getPointAt(t)
    const targetLookAt = targetSpline.getPointAt(t)

    // Smoothly damp camera position along spline
    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamPos.x, 5.0, safeDelta)
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamPos.y, 5.0, safeDelta)
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamPos.z, 5.0, safeDelta)

    // Smoothly damp camera lookAt target vector
    currentLookAt.current.x = THREE.MathUtils.damp(currentLookAt.current.x, targetLookAt.x, 5.5, safeDelta)
    currentLookAt.current.y = THREE.MathUtils.damp(currentLookAt.current.y, targetLookAt.y, 5.5, safeDelta)
    currentLookAt.current.z = THREE.MathUtils.damp(currentLookAt.current.z, targetLookAt.z, 5.5, safeDelta)

    camera.lookAt(currentLookAt.current)
  })

  return (
    <>
      {/* Editable Theatre.js PerspectiveCamera for studio choreography */}
      <EditableCamera
        theatreKey="MainCamera"
        makeDefault
        position={[0, 0, 7]}
        fov={responsiveFov}
        near={0.1}
        far={100}
      />

      {/* Refractive Studio Lighting Rig */}
      <StudioLighting />

      {/* Hero Kinetic Sculpture (Page 1) */}
      <HeroSculpture />

      {/* Procedural Domain Zones (Pages 2 - 4) */}
      <DomainZones />

      {/* Selected Works 3D Spatial Gallery (Pages 3.5 - 4.8) */}
      <ProjectGallery />

      {/* Physics Tech Pit Playground (Pages 5.5 - 6.0) */}
      <PhysicsTechPit />
    </>
  )
}

export default SceneDirector
