import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

// firebase
import FirestoreNetwork from '../data/network/FirestoreNetwork';
import { PastData } from '../data/model/PastData';

// arduino
import ArduinoNetwork from '../data/network/ArduinoNetwork';
import { CurrentData } from '../data/model/CurrentData';

// recharts
import TempChart from '../components/TempChart';

// arwes
import { Project, Words } from 'arwes';
import { Anim } from '../data/model/Anim';

// util
import { useWindowDimensions } from '../util/dimensions';

const TopScreen: React.FC = () => {
    const { width } = useWindowDimensions(); // 画面サイズ

    const [loading, setLoading] = useState<boolean>(true); // ロード中
    const [data, setData] = useState<PastData[]>([]); // グラフに表示するデータ
    const [currentData, setCurrentData] = useState<CurrentData | null>(null); // 現在のデータ
    useEffect(() => {
        const run = async () => {
            // arduino 現在のデータを取得 (エラーハンドリングはNetwork中で記述。エラー発生時はnullを返す)
            const temp = await ArduinoNetwork.getCurrentTemp();
            console.log("室温:", temp);
            const _currentData: CurrentData = {
                temperature: temp,
                aircon: null,
                auto: null
            };
            setCurrentData(_currentData);

            try {
                // firebase 過去のデータを取得
                const res = await FirestoreNetwork.getPastData();
                setData(res);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        };
        setTimeout(() => {
            run();
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // テキスト
    const _tempText = `${currentData?.temperature ?? "-"}℃`;
    let _airconText;
    if (currentData?.aircon === undefined || currentData?.aircon === null) {
        _airconText = `-`;
    } else {
        _airconText = `${currentData.aircon ? "ON" : "OFF"}`
    }
    let _autoText;
    if (currentData?.auto === undefined || currentData?.auto === null) {
        _autoText = `-`;
    } else {
        _autoText = `${currentData.auto ? "ON" : "OFF"}`
    }
    const _blank = "\u00A0".repeat(4); // 空白文字
    const headerText = width > 800 ? `現在の室温: ${_tempText}${_blank}エアコン: ${_airconText}${_blank}オート: ${_autoText}` : `現在の室温: ${_tempText}`;

    return (
        <Layout loading={loading}>
            <Project
                animate
                header={headerText}
            >
                {(anim: Anim) => (
                    <div>
                        {loading === false && (
                            <div>
                                <div style={{ width: width * 0.8, margin: 'auto' }}>
                                    <Words animate show={anim.entered}>
                                        現在エアコンは作動していません。
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
}
export default TopScreen;
