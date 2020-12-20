import React from 'react';
import { Project, Words } from 'arwes';
import { Anim } from '../../data/model/Anim';

const Top: React.FC = () => {
  return (
    <Project animate header="aweconについて">
      {(anim: Anim) => (
        <div>
          <Words animate show={anim.entered}>
            トップページです
          </Words>
        </div>
      )}
    </Project>
  );
};
export default Top;
