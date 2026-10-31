import * as THREE from 'three'

export const ChromaticRingShader = {
  uniforms: {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#111115') }, // Deep Ink
    uColorB: { value: new THREE.Color('#3b82f6') }, // Cobalt
    uColorC: { value: new THREE.Color('#f59e0b') }, // Amber
    uColorD: { value: new THREE.Color('#ec4899') }, // Neon Rose
    uAlabaster: { value: new THREE.Color('#F4F3EF') }, // Alabaster Base
    uRoughness: { value: 0.15 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: /* glsl */ `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    uniform vec3 uColorD;
    uniform vec3 uAlabaster;
    
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Angle of ring around perimeter
      float angle = atan(vWorldPosition.z, vWorldPosition.x);
      float wave = sin(angle * 3.0 + uTime * 2.5) * 0.5 + 0.5;
      float wave2 = cos(vUv.x * 6.28318 - uTime * 1.8) * 0.5 + 0.5;

      // Chromatic dispersion blend
      vec3 grad1 = mix(uColorA, uColorB, wave);
      vec3 grad2 = mix(uColorC, uColorD, wave2);
      vec3 baseHarmonic = mix(grad1, grad2, 0.45);

      // Fresnel edge glow for physical sheen on alabaster background
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
      vec3 finalColor = mix(baseHarmonic, uAlabaster, 0.2);
      finalColor += fresnel * 0.6;

      gl_FragColor = vec4(finalColor, 0.95);
    }
  `,
}
