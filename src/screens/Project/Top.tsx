import React from 'react';
import { Project, Words, Frame } from 'arwes';
import { Anim } from '../../data/model/Anim';

const Top: React.FC = () => {
  return (
    <Project animate header="aweconについて">
      {(anim: Anim) => (
        <div>
          {/* 吹き出し1 */}
          <div>
            <div
              style={{
                display: 'inline-block',
                borderRadius: '10px 10px 10px 10px',
                borderStyle: 'solid',
                borderWidth: '2 px',
                borderColor: 'rgb(30, 60, 150) rgb(10, 30, 100) rgb(10, 30, 100) rgb(30, 60, 150)',
                backgroundColor: 'rgba(30, 60, 100, 0.4)',
                padding: '10px 20px',
                margin: '0 10px 10px 10px',
              }}
            >
              <Words animate show={anim.entered}>
                「エアコンをちゃんと消したか心配...」
              </Words>
            </div>
            <div
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: 'solid 1px rgb(30, 60, 100)',
                backgroundColor: 'rgba(30, 60, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
            <div
              style={{
                display: 'inline-block',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                border: 'solid 1px rgb(30, 60, 100)',
                backgroundColor: 'rgba(30, 60, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
            <div
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'solid 1px rgb(30, 60, 100)',
                backgroundColor: 'rgba(30, 60, 100, 0.4)',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
          </div>

          {/* 吹き出し2 */}
          <div>
            <div
              style={{
                display: 'inline-block',
                borderRadius: '10px 10px 10px 10px',
                borderStyle: 'solid',
                borderWidth: '2 px',
                borderColor: 'rgb(100, 60, 100) rgb(70, 40, 70) rgb(70, 40, 70) rgb(100, 60, 100)',
                backgroundColor: 'rgba(100, 60, 100, 0.4)',
                padding: '10px 20px',
                margin: '0 10px 10px 60px',
              }}
            >
              <Words animate show={anim.entered}>
                「帰ってから暖房つけてもあったまるまでが寒すぎる!!」
              </Words>
            </div>
            <div
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: 'solid 1px rgb(100, 60, 100)',
                backgroundColor: 'rgba(100, 60, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
            <div
              style={{
                display: 'inline-block',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                border: 'solid 1px rgb(100, 60, 100)',
                backgroundColor: 'rgba(100, 60, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
            <div
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'solid 1px rgb(100, 60, 100)',
                backgroundColor: 'rgba(100, 60, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
          </div>

          {/* 吹き出し3 */}
          <div>
            <div
              style={{
                display: 'inline-block',
                borderRadius: '10px 10px 10px 10px',
                borderStyle: 'solid',
                borderWidth: '2 px',
                borderColor: 'rgb(50, 120, 100) rgb(35, 80, 70) rgb(35, 80, 70) rgb(50, 120, 100)',
                backgroundColor: 'rgba(50, 120, 100, 0.4)',
                padding: '10px 20px',
                margin: '0 10px 10px 20px',
              }}
            >
              <Words animate show={anim.entered}>
                「リモコンを取りに行くのは面倒だけど、スマホなら手元にある」
              </Words>
            </div>
            <div
              style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: 'solid 1px rgb(50, 120, 100)',
                backgroundColor: 'rgba(50, 120, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
            <div
              style={{
                display: 'inline-block',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                border: 'solid 1px rgb(50, 120, 100)',
                backgroundColor: 'rgba(50, 120, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
            <div
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'solid 1px rgb(50, 120, 100)',
                backgroundColor: 'rgba(50, 120, 100, 0.4)',
                marginRight: '10px',
                marginBottom: '10px',
                verticalAlign: 'bottom',
              }}
            ></div>
          </div>

          <p>
            <Words animate show={anim.entered}>
              そんな悩みを解決するのが、いつでもどこからでもエアコンを操作できるやばいエアコン操作アプリ&quot;AWECON&quot;!!!
            </Words>
          </p>
          <p>
            <Words animate show={anim.entered}>
              この&quot;AWECON&quot;を使えば、パソコンからでもスマホからでも、ボタン一つで、簡単にエアコンを操作可能
            </Words>
          </p>
          <p>
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
