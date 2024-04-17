import { CircleSubject, Connector, EditableAnnotation, Label } from '@visx/annotation';
import { useState } from 'react';

import { greens } from './App.tsx';

export function CustomizedAnnotation({ x, y, title }: { x: number; y: number; title: string }) {
  const [color] = useState({
    connector: 'black',
    hotspot: 'red'
  });
  const editProp = { strokeWidth: 0.5, r: 5, width: 1, height: 1 };
  return (
    <EditableAnnotation
      x={x}
      y={y}
      dx={40}
      dy={11}
      height={1}
      width={1}
      canEditSubject={true}
      // canEditLabel={false}
      subjectDragHandleProps={editProp}
      labelDragHandleProps={editProp}
    >
      <Connector stroke={color.connector} type={'elbow'} pathProps={{ strokeWidth: 0.1 }} />
      <Label
        showAnchorLine={true}
        anchorLineStroke={color.hotspot}
        showBackground={true}
        backgroundProps={{ stroke: greens[1], strokeWidth: 0.1 }}
        // fontColor={greens[2]}
        width={30}
        subtitleFontSize={4}
        title={title}
        titleFontSize={4}
        backgroundPadding={0}
        titleProps={{ strokeWidth: 0 }}
        verticalAnchor={'middle'}
        horizontalAnchor={'middle'}
      />
      <CircleSubject
        width={1}
        height={1}
        radius={3}
        strokeWidth={1}
        className='animate-pulse stroke-blue-300'
      />
    </EditableAnnotation>
  );
}
