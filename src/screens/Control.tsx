import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import { Project } from 'arwes';
import { Anim } from '../data/model/Anim';

// material-ui
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

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
                <FormControl>
                  <InputLabel>Age</InputLabel>
                  <Select value={20}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
              </div>
            )}
          </>
        )}
      </Project>
    </Layout>
  );
};
export default ControlScreen;
