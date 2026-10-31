import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'

export type ProjectMaterialImpl = THREE.ShaderMaterial & {
  uTexture: THREE.Texture | null
  uScrollVelocity: number
  uHover: number
  uTime: number
}

export const ProjectMaterial = shaderMaterial(
  {
    uTexture: null as THREE.Texture | null,
    uScrollVelocity: 0,
    uHover: 0,
    uTime: 0,
  },
  /* glsl */ `
    uniform float uScrollVelocity;
    uniform float uHover;
    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);

      vec3 pos = position;

      // Smooth sine wave curvature along Y and Z axes proportional to scroll speed
      float curveFactor = uScrollVelocity * 14.0;
      float waveZ = sin(pos.y * 1.5 + uTime * 2.5) * curveFactor;
      float waveY = -cos(pos.x * 2.0) * curveFactor * 0.35;
      pos.z += waveZ;
      pos.y += waveY;

      // Smooth forward elevation on hover
      pos.z += uHover * 0.25;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* glsl */ `
    uniform sampler2D uTexture;
    uniform float uHover;
    uniform float uScrollVelocity;
    uniform float uTime;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      // 1. Smooth glass lens zoom on pointer hover
      vec2 center = vec2(0.5);
      float zoom = 1.0 - uHover * 0.08;
      vec2 zoomedUv = (vUv - center) * zoom + center;

      // Clamp UV to prevent edge clamping artifacts during lens zoom
      zoomedUv = clamp(zoomedUv, vec2(0.001), vec2(0.999));

      // 2. Subtle chromatic RGB shift at edges during scroll and hover
      float rgbShift = abs(uScrollVelocity) * 0.06 + uHover * 0.012;
      vec2 shiftOffset = vec2(rgbShift, rgbShift * 0.5);

      float r = texture2D(uTexture, zoomedUv + shiftOffset).r;
      float g = texture2D(uTexture, zoomedUv).g;
      float b = texture2D(uTexture, zoomedUv - shiftOffset).b;
      vec3 texColor = vec3(r, g, b);

      // 3. Subtle physical specular edge falloff
      vec3 viewDir = normalize(vViewPosition);
      vec3 normal = normalize(vNormal);
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.5);
      vec3 finalColor = mix(texColor, vec3(1.0), fresnel * 0.18 + uHover * 0.08);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
)
