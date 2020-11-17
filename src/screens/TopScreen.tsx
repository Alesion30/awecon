import React from 'react';
import Layout from '../Layout';
import { Project, Words } from 'arwes';
import TempChart from '../components/TempChart';
import { ChartData } from '../data/model/ChartData';
import { useWindowDimensions } from '../util/dimensions';

const TopScreen: React.FC = () => {
    const { width } = useWindowDimensions(); // 画面サイズ

    const data: ChartData[] = [
        {
            "date": "18:30",
            "temp": 30,
            "threshold": 28
        },
        {
            "date": "19:00",
            "temp": 29,
            "threshold": 28
        },
        {
            "date": "19:30",
            "temp": 32,
            "threshold": 28
        },
        {
            "date": "20:30",
            "temp": 25,
            "threshold": 28
        },
        {
            "date": "21:00",
            "temp": 28,
            "threshold": 28
        },
        {
            "date": "21:30",
            "temp": 33.4,
            "threshold": 28
        },
    ];

    const _currentTemp = 24;
    const _blank = "\u00A0".repeat(4);

    return (
        <Layout>
            <Project
                animate
                header={`現在の室温: ${_currentTemp}℃${_blank}エアコン: OFF${_blank}オート: OFF`}
            >
                {(anim: any) => (
                    <div>
                        <div style={{ width: width * 0.8, margin: 'auto' }}>
                            <Words animate show={anim.entered}>
                                過去6時間の室温データです。現在エアコンは作動していません。
                            </Words>
                        </div>
                        <TempChart data={data} width={width * 0.8} height={400} style={{ margin: 'auto', marginTop: 10 }} />
                    </div>
                )}
            </Project>
        </Layout>
    );
}
export default TopScreen;
