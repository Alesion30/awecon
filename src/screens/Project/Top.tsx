import React from 'react';
import { Project, Words } from 'arwes';
import { Anim } from '../../data/model/Anim';
import SpeechBalloonComponent from '../../components/SpeechBalloon';

const Top: React.FC = () => {
  return (
    <Project animate header="aweconについて">
      {(anim: Anim) => (
        <div>
          <SpeechBalloonComponent
            title="「エアコンをちゃんと消したか心配...」"
            borderColor="rgba(30, 60, 100)"
            backgroundColor="rgba(30, 60, 100, 0.4)"
            show={anim.entered}
            start={1000}
          />
          <SpeechBalloonComponent
            title="「帰ってから暖房つけてもあったまるまでが寒すぎる!!」"
            borderColor="rgb(100, 60, 100)"
            backgroundColor="rgba(100, 60, 100, 0.4)"
            show={anim.entered}
            start={2000}
          />
          <SpeechBalloonComponent
            title="「リモコンを取りに行くのは面倒だけど、スマホなら手元にある」"
            borderColor="rgb(50, 120, 100)"
            backgroundColor="rgba(50, 120, 100, 0.4)"
            show={anim.entered}
            start={3000}
          />
          <div style={{ height: 15 }} />
          <p
            style={{
              fontSize: 20,
              marginBottom: 10,
              transition: `opacity 1500ms 4000ms ease`,
              opacity: anim.entered ? 1 : 0,
            }}
          >
            <Words animate show={anim.entered}>
              そんな悩みを解決するのが、いつでもどこからでもエアコンを操作できるやばいエアコン操作アプリ&quot;AWECON&quot;!!!
            </Words>
          </p>
          <p
            style={{
              fontSize: 20,
              marginBottom: 10,
              transition: `opacity 1500ms 5500ms ease`,
              opacity: anim.entered ? 1 : 0,
            }}
          >
            <Words animate show={anim.entered}>
              この&quot;AWECON&quot;を使えば、パソコンからでもスマホからでも、ボタン一つで、簡単にエアコンを操作可能
            </Words>
          </p>
          <p
            style={{
              fontSize: 20,
              marginBottom: 10,
              transition: `opacity 1500ms 7000ms ease`,
              opacity: anim.entered ? 1 : 0,
            }}
          >
            <Words animate show={anim.entered}>
              暑い夏の日でも、寒い冬の日でも、動くのが面倒な時にだって大活躍!!
            </Words>
          </p>
        </div>
      )}
    </Project>
  );
};
export default Top;
