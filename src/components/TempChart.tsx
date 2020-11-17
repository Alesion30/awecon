import React from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Area, Line, Legend } from 'recharts'
import { ChartData } from '../data/model/ChartData';

interface IProps {
    data: ChartData[]
    width: number
    height: number
    style?: object | undefined
}
const TempChart: React.FC<IProps> = (props: IProps) => {
    const _tempList: number[] = props.data.map(item => { return item.temp });
    const _max = _tempList.reduce((a, b) => a > b ? a : b);
    const _min = _tempList.reduce((a, b) => a < b ? a : b);
    return (
        <ComposedChart data={props.data} width={props.width} height={props.height} style={props.style}
            margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Legend />
            <XAxis dataKey="date" />
            <YAxis domain={[Math.floor(_min) - 2, Math.ceil(_max) + 2]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Area type="monotone" dataKey="temp" stroke="#82ca9d" fillOpacity={1} fill="url(#temp)" />
            <Line type="monotone" dataKey="threshold" stroke="#ff7300" />
        </ComposedChart>
    );
}
export default TempChart;
