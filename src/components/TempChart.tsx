import React from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Area, Line, Legend, Tooltip } from 'recharts'
import { PastData } from '../data/model/PastData';

interface IProps {
    data: PastData[]
    width: number
    height: number
    style?: object | undefined
}
const TempChart: React.FC<IProps> = (props: IProps) => {
    const _tempList: number[] = props.data.map(item => { return item.temperature });
    let _max, _min;
    if (_tempList.length > 0) {
        _max = _tempList.reduce((a, b) => a > b ? a : b);
        _min = _tempList.reduce((a, b) => a < b ? a : b);
    } else {
        _max = 30;
        _min = 2;
    }
    return (
        <ComposedChart data={props.data} width={props.width} height={props.height} style={props.style}
            margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
            {/* グラフの設定 */}
            <Legend />
            <XAxis dataKey="date" />
            <YAxis unit="℃" allowDecimals={false} minTickGap={1} domain={[Math.floor(_min) - 2, Math.ceil(_max) + 2]} />
            <CartesianGrid strokeDasharray="1 1" />
            <Tooltip
                formatter={value => { return `${value}℃` }}
                contentStyle={{ backgroundColor: "rgb(2, 17, 20)" }}
            />

            {/* 気温データ */}
            <Area type="monotone" dataKey="temperature" stroke="#82ca9d" fillOpacity={1} fill="url(#temp)" />
            <defs>
                <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>

            {/* 閾値 */}
            <Line type="monotone" dataKey="threshold" stroke="#ff7300" />
        </ComposedChart>
    );
}
export default TempChart;
