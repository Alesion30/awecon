import React, { useState, useEffect } from 'react';
import { Project } from 'arwes';
import { Anim } from '../../data/model/Anim';
import { Option } from '../../data/model/Option';
import { Setting } from '../../data/model/Setting';
import CustomSelect from '../../components/CustomSelect';
import Button from '@material-ui/core/Button';
import ArduinoNetwork from '../../data/network/ArduinoNetwork';

const Control: React.FC = () => {
  // 温度(16~29)
  const [temp, setTemp] = useState<Setting['temp']>(23);
  const tempList: Option[] = [];
  for (let i = 16; i < 30; i++) {
    tempList.push({ label: `${i}℃`, value: i });
  }
  // 運転モード(オート1・暖房2・冷房3・除湿4)
  const [mode, setMode] = useState<Setting['mode']>(1);
  const modeList: Option[] = [
    { label: 'オート', value: 1 },
    { label: '暖房', value: 2 },
    { label: '冷房', value: 3 },
    { label: '除湿', value: 4 },
  ];
  // 風量(0~5)
  const [fan, setFan] = useState<Setting['fan']>(0);
  const fanList: Option[] = [
    { label: '自動', value: 0 },
    { label: 'しずか', value: 1 },
    { label: '小', value: 2 },
    { label: '中', value: 3 },
    { label: '大', value: 4 },
    { label: '最大', value: 5 },
  ];
  // 風向の高さ(0~6)
  const [vd, setVd] = useState<Setting['vdir']>(0);
  const vdList: Option[] = [
    { label: '自動', value: 0 },
    { label: 'スイング', value: 1 },
    { label: '天井', value: 2 },
    { label: '上向き', value: 3 },
    { label: 'やや上向き', value: 4 },
    { label: 'やや下向き', value: 5 },
    { label: '下向き', value: 6 },
  ];
  // 風向の左右(0~6)
  const [hd, setHd] = useState<Setting['hdir']>(0);
  const hdList: Option[] = [
    { label: '自動', value: 0 },
    { label: 'スイング', value: 1 },
    { label: '左向き', value: 2 },
    { label: 'やや左向き', value: 3 },
    { label: '真ん中', value: 4 },
    { label: 'やや右向き', value: 5 },
    { label: '右向き', value: 6 },
  ];

  useEffect(() => {
    const settingStr = localStorage.getItem('setting');
    const setting: Setting | null = settingStr ? JSON.parse(settingStr) : null;
    if (setting && 'mode' in setting) {
      setMode(setting.mode);
    }
    if (setting && 'fan' in setting) {
      setFan(setting.fan);
    }
    if (setting && 'temp' in setting) {
      setTemp(setting.temp);
    }
    if (setting && 'vdir' in setting) {
      setVd(setting.vdir);
    }
    if (setting && 'hdir' in setting) {
      setHd(setting.hdir);
    }
  }, []);

  // 「エアコンを起動」クリック時
  const handleStart = async () => {
    try {
      const setting: Setting = {
        mode: mode,
        fan: fan,
        temp: temp,
        vdir: vd,
        hdir: hd,
      };
      await ArduinoNetwork.controlAircon(setting);
      localStorage.setItem('setting', JSON.stringify(setting));
      alert('送信しました！！');
    } catch (err) {
      console.log(err);
      alert('エアコンの起動に失敗しました。。。');
    }
  };

  // 「エアコンを停止」クリック時
  const handleStop = async () => {
    try {
      await ArduinoNetwork.stopAircon();
      alert('停止しました！！');
    } catch (err) {
      console.log(err);
      alert('エアコンの停止に失敗しました。。。');
    }
  };

  return (
    <Project animate header="エアコンの操作">
      {(anim: Anim) => (
        <div>
          <div>
            <CustomSelect
              label="温度"
              value={temp}
              onChange={(e) => setTemp(e.target.value as Setting['temp'])}
              items={tempList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="運転モード"
              value={mode}
              onChange={(e) => setMode(e.target.value as Setting['mode'])}
              items={modeList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="風量"
              value={fan}
              onChange={(e) => setFan(e.target.value as Setting['fan'])}
              items={fanList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="風向の高さ"
              value={vd}
              onChange={(e) => setVd(e.target.value as Setting['vdir'])}
              items={vdList}
              style={{ margin: 10 }}
            />
            <CustomSelect
              label="風向の左右"
              value={hd}
              onChange={(e) => setHd(e.target.value as Setting['hdir'])}
              items={hdList}
              style={{ margin: 10 }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button onClick={handleStart} variant="contained" color="primary" style={{ margin: 10 }}>
              エアコンを起動
            </Button>
            <Button onClick={handleStop} variant="contained" color="secondary" style={{ margin: 10 }}>
              エアコンを停止
            </Button>
          </div>
        </div>
      )}
    </Project>
  );
};
export default Control;
