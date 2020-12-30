import React from 'react';
import { Project, Words, List } from 'arwes';
import { Anim } from '../../data/model/Anim';

const Top: React.FC = () => {
  return (
    <Project animate header="aweconについて">
      {(anim: Anim) => (
        <div>
          <h2>
            <Words animate show={anim.entered}>
              使用方法
            </Words>
          </h2>
          <h3>
            <Words animate show={anim.entered}>
              エアコン起動方法
            </Words>
          </h3>
          <List node="ol">
            <li>
              <p>
                <Words animate show={anim.entered}>
                  ・温度(16~29℃)
                </Words>
              </p>
              <p>
                <Words animate show={anim.entered}>
                  ・運転モード(オート、暖房、冷房、除湿)
                </Words>
              </p>
              <p>
                <Words animate show={anim.entered}>
                  ・風量(自動、1、2、3、4、5)
                </Words>
              </p>
              <p>
                <Words animate show={anim.entered}>
                  ・風向高さ(自動、スイング、天井、上向き、やや上向き、やや下向き、下向き)
                </Words>
              </p>
              <p>
                <Words animate show={anim.entered}>
                  ・風向左右(自動、スイング、左向き、やや左向き、真ん中、やや右向き、右向き)
                </Words>
              </p>
              <p>
                <Words animate show={anim.entered}>
                  の計5項目を設定する。
                </Words>
              </p>
            </li>
            <li>
              <p>
                <Words animate show={anim.entered}>
                  Arduinoに接続されている赤外線LEDを、エアコンに向け、「エアコンを起動」ボタンを押す。
                </Words>
              </p>
            </li>
          </List>

          <h3>
            <Words animate show={anim.entered}>
              エアコン停止方法
            </Words>
          </h3>
          <List node="ol">
            <li>
              <p>
                <Words animate show={anim.entered}>
                  Arduinoに接続されている赤外線LEDを、エアコンに向け、「エアコンを停止」ボタンを押す。
                </Words>
              </p>
            </li>
          </List>
        </div>
      )}
    </Project>
  );
};
export default Top;
