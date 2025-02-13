import { useState } from 'react';

import './App.css';
import { ImageWithOverlayLayers } from './Image-with-overlay-layers.tsx';
import { PostLayout } from './Post-layout.tsx';
import { CustomizedAnnotation } from './customized-annotation.tsx';
import { useMousePositionOverSVG } from './use-mouse-position-over-svg.tsx';

export const greens = ['#ecf4f3', '#68b0ab', '#006a71'];

function AnnotatedImage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [annotation, setAnnotation] = useState<any[]>([]);
  const ref = useMousePositionOverSVG(setPos);

  return (
    <ImageWithOverlayLayers src={'./nino-liverani-CKxD_Qh6ULY-unsplash.jpg'} alt={'image'}>
      <svg
        ref={ref}
        viewBox='0 0 100 100'
        className={'w-full h-full fill-transparent stroke-white'}
        // onClick={() => {
        //   setAnnotation((annotation) => [...annotation, pos]);
        // }}
      >
        <CustomizedAnnotation x={48} y={46} title={'Neck'} />
        {/*<CustomizedAnnotation x={pos.x} y={pos.y} title={'Rib'} />*/}
        {/*{annotation.map((annotation) => (*/}
        {/*  <CustomizedAnnotation x={annotation.x} y={annotation.y} title={'ss'} />*/}
        {/*))}*/}
        {/*<CustomizedAnnotation x={48} y={53} title={'Spine'} />*/}
      </svg>
    </ImageWithOverlayLayers>
  );
}

function App() {
  return (
    <main className={'container mx-auto'}>
      <div>
        <PostLayout image={<AnnotatedImage />} />
      </div>
    </main>
  );
}

export default App;
