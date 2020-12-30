import React from 'react';
import sample from '../../resource/img/bg.png';
import { Project, Words, Image } from 'arwes';
import { Anim } from '../../data/model/Anim';

const Top: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '90vh', backgroundColor: 'red' }}>
      <Image animate resources={sample} style={{ MaxHeight: '100%', zIndex: 1 }} />
      <p
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 2,
          fontSize: '50px',
          transform: 'translate(-50%,-50%)',
          margin: 0,
          padding: 0,
        }}
      >
        This is &quot;awecon&quot;
        <br />
        We can control Air conductor!!
      </p>
    </div>
  );
};
export default Top;
