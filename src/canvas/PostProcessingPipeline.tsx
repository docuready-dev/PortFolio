import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'

export function PostProcessingPipeline() {
  return (
    <EffectComposer multisampling={0}>
      {[
        (
          <Bloom
            key="bloom"
            luminanceThreshold={0.9}
            intensity={0.3}
            levels={5}
            mipmapBlur
          />
        ) as unknown as JSX.Element,
        (<Noise key="noise" opacity={0.025} />) as unknown as JSX.Element,
      ]}
    </EffectComposer>
  )
}

export default PostProcessingPipeline
