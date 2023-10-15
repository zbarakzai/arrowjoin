import * as React from 'react';
import Xarrow, {Xwrapper} from '../index';

import './style.css';

const boxStyle = {
  border: '1px #999 solid',
  borderRadius: '10px',
  textAlign: 'center',
  width: '100px',
  height: '30px',
  color: 'black',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
} as const;

const canvasStyle = {
  width: '100%',
  height: '100vh',
  background: 'white',
  overflow: 'auto',
  display: 'flex',
  color: 'black',
} as const;

export default {
  title: 'Your Component Title',
  component: Xarrow,
} as const;

interface BoxProps {
  box: {id: string};
  className?: string;
}

function Box({box, className}: BoxProps) {
  return (
    <div className={className} id={box.id} style={boxStyle}>
      {box.id}
    </div>
  );
}

export function Default() {
  const box = {id: 'box1'};
  const box2 = {id: 'box2'};
  return (
    <div style={canvasStyle} id="canvas">
      <Xwrapper>
        <div className="flex w-full space-x-4">
          <Box box={box} />
          <Box className="mt-4" box={box2} />
          {/* <Xarrow start={'box1'} end={'box2'} startAnchor={'auto'} /> */}
          <Xarrow
            start={'box1'}
            end={'box2'}
            startAnchor={'bottom'}
            endAnchor={'top'}
            curveness={1}
            gridBreak="40%"
            dashness
            className="animate"
            onClick={(refrence: any) => {
              console.log('Booook', refrence);
            }}
          />
        </div>
      </Xwrapper>
    </div>
  );
}
