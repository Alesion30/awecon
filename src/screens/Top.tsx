import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Project, Words } from 'arwes';
import { Anim } from '../data/model/Anim';

const TopScreen: React.FC = () => {
  // state 状態
  const [loading, setLoading] = useState<boolean>(true); // ロード中

  // componentDidMount 画面リロード時、最初に呼び出される処理
  useEffect(() => {
    // ロード解除
    setLoading(false);
  }, []);

  return (
    <Layout loading={loading}>
      <Project animate header="awecon">
        {(anim: Anim) => (
          <>
            {loading === false && (
              <div>
                <Words animate show={anim.entered}>
                  トップページです
                </Words>
              </div>
            )}
          </>
        )}
      </Project>
    </Layout>
  );
};
export default TopScreen;
