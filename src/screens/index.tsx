import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import Top from './Project/Top';
import Temp from './Project/Temp';
import Control from './Project/Control';
import FirestoreNetwork from '../data/network/FirestoreNetwork';
import { PastData } from '../data/model/PastData';
import ArduinoNetwork from '../data/network/ArduinoNetwork';
import { CurrentData } from '../data/model/CurrentData';
import { FirebaseStatus } from '../data/model/FirebaseStatus';

const index: React.FC = () => {
  // state 状態
  const [loading, setLoading] = useState<boolean>(true); // ロード中
  const [data, setData] = useState<PastData[]>([]); // グラフに表示するデータ Firebaseからのデータ
  const [currentData, setCurrentData] = useState<CurrentData>({ temperature: null, aircon: null, auto: null }); // 現在のデータ Arduinoからのデータ
  const [firebaseStatus, setFirebaseStatus] = useState<FirebaseStatus>({ status: 0 });

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
        setFirebaseStatus({ status: 1 });
      } catch (err) {
        setFirebaseStatus({ status: 2 });
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
      <Divider />
      <Control />
      <Divider />
      <Temp data={data} currentData={currentData} firebaseStatus={firebaseStatus} />
    </Layout>
  );
};
export default index;

const Divider = styled.div`
  height: 30px;
`;
