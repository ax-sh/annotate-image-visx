import { CircleSubject, Connector, EditableAnnotation, Label } from '@visx/annotation';
import { useState } from 'react';

import { greens } from './App.tsx';

export function CustomizedAnnotation({ x, y, title }: { x: number; y: number; title: string }) {
  const [color] = useState({
    connector: 'black',
    hotspot: 'red'
  });
  const editProp = {
    strokeWidth: 0.5,
    r: 5,
    width: 1,
    height: 1,
    strokeDasharray: 1,
    className: 'path'
  };
  return (
    <EditableAnnotation
      x={x}
      y={y}
      dx={40}
      dy={11}
      // height={1}
      // width={1}
      canEditSubject={true}
      // canEditLabel={false}
      subjectDragHandleProps={editProp}
      labelDragHandleProps={editProp}
      height={1}
      width={1}
    >
      <Connector stroke={color.connector} type={'elbow'} pathProps={{ strokeWidth: 0.2 }} />
      <Label
        showBackground={true}
        showAnchorLine={false}
        anchorLineStroke={color.hotspot}
        backgroundProps={{
          stroke: greens[1],
          strokeWidth: 0,
          // height: 2,
          textAnchor: 'middle'
        }}
        // fontColor={greens[2]}

        width={30}
        subtitleFontSize={4}
        title={title}
        titleFontSize={4}
        backgroundPadding={0}
        titleProps={{ strokeWidth: 0 }}
        verticalAnchor={'middle'}
        horizontalAnchor={'start'}
      />
      <CircleSubject
        width={1}
        height={1}
        radius={3}
        strokeWidth={1}
        className='animate-pulse stroke-blue-300 stroke-dasharray-1'
      />
    </EditableAnnotation>
  );
}
