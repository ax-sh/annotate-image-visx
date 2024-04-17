import { ElementRef, useEffect, useRef } from 'react';

export function useMousePositionOverSVG(callback: (pos: { x: number; y: number }) => void) {
  const ref = useRef<ElementRef<'svg'>>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const handler = ({ clientX, clientY }: MouseEvent) => {
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const loc = pt.matrixTransform(svg.getScreenCTM()?.inverse());
      callback(loc);
    };
    svg.addEventListener('mousemove', handler);
    return () => svg.removeEventListener('mousemove', handler);
  }, [callback]);
  return ref;
}
