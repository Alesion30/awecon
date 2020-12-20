import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Top from './Project/Top';
import Temp from './Project/Temp';
import Control from './Project/Control';
import FirestoreNetwork from '../data/network/FirestoreNetwork';
import { PastData } from '../data/model/PastData';
import ArduinoNetwork from '../data/network/ArduinoNetwork';
import { CurrentData } from '../data/model/CurrentData';

const index: React.FC = () => {
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

  return (
    <Layout loading={loading}>
      <Top />
      <div style={{ height: 30 }} />
      <Control />
      <div style={{ height: 30 }} />
      <Temp data={data} currentData={currentData} />
    </Layout>
  );
};
export default index;
