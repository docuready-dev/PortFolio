# Architecture & Design System

## Overview
This document specifies the architectural guidelines, design system, and technical constraints for the 3D Spatial Portfolio project. All upcoming phases must adhere strictly to these principles.

---

## 1. Aesthetic Identity
- **Alabaster Canvas**: Baseline theme color `#F4F3EF` (clean, warm editorial alabaster), delivering a high-end physical publication feel.
- **Frosted Glass (Optics)**: Physical light scattering and refraction implemented via `@react-three/drei`'s `MeshTransmissionMaterial` (roughness, transmission, thickness, chromatic aberration, and anisotropic attenuation).
- **Deep Ink Typography**: Primary typography and high-contrast editorial markings set to `#111115` (deep carbon ink) with nuanced muted secondary shades (`#55555C`, `#8E8E93`).

---

## 2. Asset Integrity (Zero External Models)
- **100% Procedural 3D Geometry**: All meshes, sculptural forms, interactive artifacts, and physics colliders must be generated procedurally (e.g., mathematical parametric surfaces, custom buffer geometries, extruded paths, and procedural noise modifiers).
- **Custom Shaders & Canvas Textures**: Custom GLSL vertex and fragment shaders and dynamic 2D HTML Canvas procedural textures for maps and surface relief.
- **Zero External `.glb` / `.gltf` / `.obj` Dependencies**: No external 3D asset downloads, external poly models, or static texture packs. Zero network latency for asset streaming; everything compiles and initializes via client code.

---

## 3. Modular Folder Structure & Separation of Concerns
Every component must reside in its designated `src/` subfolder. Monolithic accumulation in `App.tsx` is prohibited.

```
src/
├── canvas/    # Persistent R3F Canvas, lighting rig, post-processing stack, ScrollControls wrapper
├── scenes/    # 100% procedural 3D zones:
│              #   - HeroSculpture
│              #   - GraphicZone
│              #   - WebZone
│              #   - AppZone
│              #   - ProjectGallery
│              #   - PhysicsTechPit
├── shaders/   # Custom GLSL vertex/fragment shaders and procedural CanvasTexture generators
├── theatre/   # Theatre.js studio/production configurations, sheet bindings, camera keyframe JSONs
├── overlay/   # Editorial Alabaster HTML scroll sections, fixed HUD navigation, Motion modals
├── store/     # Zustand state store (scroll velocity, active domain, modal/focus states)
├── types/     # Shared TypeScript interfaces for projects, shader uniforms, and scene properties
└── utils/     # Math utilities, parametric spline curves, noise algorithms, and procedural textures
```

---

## 4. State & Scene Flow
- **Scroll & Timeline Sync**: Theatre.js sheets and R3F `ScrollControls` sync viewport progress with camera positions and scene state transitions.
- **Zustand Reactive Store**: High-frequency and UI-critical states (active domain, scroll speed/damping, open project modals) are decoupled from heavy React re-renders.
