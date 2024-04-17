import './App.css';
import { CustomizedAnnotation } from './CustomizedAnnotation.tsx';
import { ImageWithOverlayLayers } from './Image-with-overlay-layers.tsx';

export const greens = ['#ecf4f3', '#68b0ab', '#006a71'];

function AnnotatedImage() {
  return (
    <ImageWithOverlayLayers src={'./nino-liverani-CKxD_Qh6ULY-unsplash.jpg'} alt={'image'}>
      <svg
        viewBox='0 0 100 100'
        // preserveAspectRatio='none'
        className={'w-full h-full fill-transparent stroke-white'}
      >
        <CustomizedAnnotation x={48} y={30} title={'Neck'} />
        {/*<CustomizedAnnotation x={48} y={40} title={'Rib'} />*/}
        {/*<CustomizedAnnotation x={48} y={53} title={'Spine'} />*/}
      </svg>
    </ImageWithOverlayLayers>
  );
}
function App() {
  return (
    <main className={'container mx-auto'}>
      <section className={'h-screen flex flex-col'}>
        <div className={'flex-grow h-full bg-red-500 overflow-hidden h-full p-6 box-border'}>
          <AnnotatedImage />
        </div>
        <section className={'flex-grow'}></section>
      </section>
    </main>
  );
}

export default App;
