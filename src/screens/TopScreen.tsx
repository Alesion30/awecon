import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

// arwes
import { Project, Words } from 'arwes';
import { Anim } from '../data/model/Anim';

// recharts
import TempChart from '../components/TempChart';

// firebase
import FirestoreNetwork from '../data/network/FirestoreNetwork';
import { PastData } from '../data/model/PastData';

// arduino
import ArduinoNetwork from '../data/network/ArduinoNetwork';
import { CurrentData } from '../data/model/CurrentData';

// util
import { useWindowDimensions } from '../util/dimensions';
import { formatTimestamp } from '../util/timestamp';

const TopScreen: React.FC = () => {
  const { width } = useWindowDimensions(); // 画面サイズ

  // state 状態
  const [loading, setLoading] = useState<boolean>(true); // ロード中
  const [data, setData] = useState<PastData[]>([]); // グラフに表示するデータ Firebaseからのデータ
  const [currentData, setCurrentData] = useState<CurrentData>({ temperature: null, aircon: null, auto: null }); // 現在のデータ Arduinoからのデータ

  // componentDidMount 画面リロード時、最初に呼び出される処理
  useEffect(() => {
    // arduino 現在のデータを取得 (エラーハンドリングはNetwork中で記述。エラー発生時はnullを返す)
    const getArduinoData = async () => {
      const temp = await ArduinoNetwork.getCurrentTemp();
      const _currentData: CurrentData = {
        temperature: temp,
        aircon: null,
        auto: null,
      };
      setCurrentData(_currentData);
    };

    // firebase 過去のデータを取得
    const getFirebaseData = async () => {
      try {
        const res = await FirestoreNetwork.getPastData();
        setData(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    // 実行
    getArduinoData();
    getFirebaseData();
  }, []);

  // テキスト
  const _tempText = `${currentData.temperature ?? '-'}℃`;
  let _airconText;
  if (currentData.aircon === null) {
    _airconText = `-`;
  } else {
    _airconText = `${currentData.aircon ? 'ON' : 'OFF'}`;
  }
  let _autoText;
  if (currentData.auto === null) {
    _autoText = `-`;
  } else {
    _autoText = `${currentData.auto ? 'ON' : 'OFF'}`;
  }
  const _blank = '\u00A0'.repeat(4); // 空白文字

  // ヘッダーのテキスト
  const headerText =
    width > 800
      ? `現在の室温: ${_tempText}${_blank}エアコン: ${_airconText}${_blank}オート: ${_autoText}`
      : `現在の室温: ${_tempText}`;

  // 期間の表示
  const range =
    data.length > 0
      ? `${formatTimestamp(data[0].date, 'MM月DD日HH時mm分')} ~ ${formatTimestamp(
          data[data.length - 1].date,
          'MM月DD日HH時mm分'
        )}`
      : null;
  const rangeText = range ? `${range}の室温データを表示しています。` : 'Firebaseとの接続に失敗しました。';

  return (
    <Layout loading={loading}>
      <Project animate header={headerText}>
        {(anim: Anim) => (
          <div>
            {loading === false && (
              <div>
                <div style={{ width: width * 0.75, margin: 'auto' }}>
                  <Words animate show={anim.entered}>
                    {rangeText}
                  </Words>
                </div>
                <TempChart data={data} width={width * 0.8} height={400} style={{ margin: 'auto', marginTop: 10 }} />
              </div>
            )}
          </div>
        )}
      </Project>
    </Layout>
  );
};
export default TopScreen;
