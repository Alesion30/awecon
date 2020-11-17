import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

// recharts
import TempChart from '../components/TempChart';
import { ChartData } from '../data/model/ChartData';

// arwes
import { Project, Words } from 'arwes';
import { Anim } from '../data/model/Anim';

// util
import { useWindowDimensions } from '../util/dimensions';

interface ICurrentData {
    temp: number | null;
    aircon: boolean | null;
    auto: boolean | null;
}

const TopScreen: React.FC = () => {
    const { width } = useWindowDimensions(); // 画面サイズ
    const _blank = "\u00A0".repeat(4); // 空白文字

    const [loading, setLoading] = useState<boolean>(true); // ロード中
    const [data, setData] = useState<ChartData[]>([]); // グラフに表示するデータ
    const [currentData, setCurrentData] = useState<ICurrentData>({ temp: null, aircon: null, auto: null }); // 現在のデータ
    useEffect(() => {
        const run = async () => {
            setData(_data);
            setCurrentData(_currentData);
            setLoading(false);
        };
        setTimeout(() => {
            run();
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 過去のデータ(firebaseから送られてくるデータ)
    const _data: ChartData[] = [];
    const now = new Date();
    const _i = 13;
    now.setMinutes(now.getMinutes() - 30 * _i);
    for (let i = 0; i < _i; i++) {
        const _t = Math.round((Math.random() * 10 + 15) * 100) / 100;
        now.setMinutes(now.getMinutes() + 30);
        const _n = `${now.getHours()}:${now.getMinutes()}`;
        const _d: ChartData = {
            "date": _n,
            "temp": _t,
            "threshold": 20
        };
        _data.push(_d);
    }

    // 現在のデータ(Arduinoから送られてくるデータ)
    const _currentData: ICurrentData = {
        temp: 24,
        aircon: false,
        auto: true
    };

    // テキスト
    const _tempText = `${currentData.temp ?? "-"}℃`;
    let _airconText;
    if (currentData.aircon == null) {
        _airconText = `-`;
    } else {
        _airconText = `${currentData.aircon ? "ON" : "OFF"}`
    }
    let _autoText;
    if (currentData.auto == null) {
        _autoText = `-`;
    } else {
        _autoText = `${currentData.auto ? "ON" : "OFF"}`
    }

    return (
        <Layout loading={loading}>
            <Project
                animate
                header={`現在の室温: ${_tempText}${_blank}エアコン: ${_airconText}${_blank}オート: ${_autoText}`}
            >
                {(anim: Anim) => (
                    <div>
                        {loading === false && (
                            <div>
                                <div style={{ width: width * 0.8, margin: 'auto' }}>
                                    <Words animate show={anim.entered}>
                                        過去6時間の室温データです。現在エアコンは作動していません。
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
