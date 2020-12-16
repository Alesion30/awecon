import React, { useEffect, useState } from 'react';
import Layout from './Layout';

// arwes
import { Project } from 'arwes';
import { Anim } from '../data/model/Anim';

const ControlScreen: React.FC = () => {
  // state 状態
  const [loading, setLoading] = useState<boolean>(true); // ロード中

  // componentDidMount 画面リロード時、最初に呼び出される処理
  useEffect(() => {
    // ロード解除
    setLoading(false);
  }, []);

  return (
    <Layout loading={loading}>
      <Project animate header="コントロール">
        {(anim: Anim) => (
          <>
            {loading === false && (
              <div>
                <h1>コントローラー画面</h1>
              </div>
            )}
          </>
        )}
      </Project>
    </Layout>
  );
};
export default ControlScreen;
