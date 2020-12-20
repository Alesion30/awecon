import React, { useState } from 'react';
import { Project } from 'arwes';
import { Anim } from '../../data/model/Anim';
import { Option } from '../../data/model/Option';
import CustomSelect from '../../components/CustomSelect';
import Button from '@material-ui/core/Button';

const Control: React.FC = () => {
  // 温度(16~29)
  const [temp, setTemp] = useState<number>(20);
  const tempList: Option[] = [];
  for (let i = 16; i < 30; i++) {
    tempList.push({ label: `${i}℃`, value: i });
  }
  // 運転モード(オート1・暖房2・冷房3・除湿4)
  const [mode, setMode] = useState<number>(1);
  const modeList: Option[] = [
    { label: 'オート', value: 1 },
    { label: '暖房', value: 2 },
    { label: '冷房', value: 3 },
    { label: '除湿', value: 4 },
  ];
  // 風量(0~5)
  const [fun, setFun] = useState<number>(0);
  const funList: Option[] = [
    { label: '自動', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ];
  // 風向の高さ(0~6)
  const [vd, setVd] = useState<number>(0);
  const vdList: Option[] = [
    { label: '自動', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
  ];
  // 風向の左右(0~6)
  const [hd, setHd] = useState<number>(0);
  const hdList: Option[] = [
    { label: '自動', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
  ];

  return (
    <Project animate header="エアコンの操作">
      {(anim: Anim) => (
        <div>
          <div>
            <CustomSelect
              label="温度"
              value={temp}
              onChange={(e) => setTemp(e.target.value as number)}
              items={tempList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="運転モード"
              value={mode}
              onChange={(e) => setMode(e.target.value as number)}
              items={modeList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="風量"
              value={fun}
              onChange={(e) => setFun(e.target.value as number)}
              items={funList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="風向の高さ"
              value={vd}
              onChange={(e) => setVd(e.target.value as number)}
              items={vdList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="風向の左右"
              value={hd}
              onChange={(e) => setHd(e.target.value as number)}
              items={hdList}
              style={{ margin: 10 }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button variant="contained" color="primary" style={{ margin: 10 }}>
              エアコンをつける
            </Button>
            <Button variant="contained" color="secondary" style={{ margin: 10 }}>
              エアコンを停止
            </Button>
          </div>
        </div>
      )}
    </Project>
  );
};
export default Control;
