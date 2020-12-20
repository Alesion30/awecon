import React from 'react';
import { Project, Words } from 'arwes';
import { Anim } from '../../data/model/Anim';
import TempChart from '../../components/TempChart';
import { PastData } from '../../data/model/PastData';
import { CurrentData } from '../../data/model/CurrentData';
import { useWindowDimensions } from '../../util/dimensions';
import { formatTimestamp } from '../../util/timestamp';

interface IProps {
  data: PastData[];
  currentData: CurrentData;
}

const Temp: React.FC<IProps> = (props: IProps) => {
  const { width } = useWindowDimensions(); // 画面サイズ

  // テキスト
  const _tempText = `${props.currentData.temperature ?? '-'}℃`;
  let _airconText;
  if (props.currentData.aircon === null) {
    _airconText = `-`;
  } else {
    _airconText = `${props.currentData.aircon ? 'ON' : 'OFF'}`;
  }
  let _autoText;
  if (props.currentData.auto === null) {
    _autoText = `-`;
  } else {
    _autoText = `${props.currentData.auto ? 'ON' : 'OFF'}`;
  }
  const _blank = '\u00A0'.repeat(4); // 空白文字

  // ヘッダーのテキスト
  const headerText =
    width > 800
      ? `現在の室温: ${_tempText}${_blank}エアコン: ${_airconText}${_blank}オート: ${_autoText}`
      : `現在の室温: ${_tempText}`;

  // 期間の表示
  const range =
    props.data.length > 0
      ? `${formatTimestamp(props.data[0].date, 'MM月DD日HH時mm分')} ~ ${formatTimestamp(
          props.data[props.data.length - 1].date,
          'MM月DD日HH時mm分'
        )}`
      : null;
  const rangeText = range ? `${range}の室温データを表示しています。` : 'Firebaseとの接続に失敗しました。';

  return (
    <Project animate header={headerText}>
      {(anim: Anim) => (
        <div>
          <div style={{ width: width * 0.75, margin: 'auto', marginTop: 30 }}>
            <Words animate show={anim.entered}>
              {rangeText}
            </Words>
          </div>
          <TempChart data={props.data} width={width * 0.8} height={400} style={{ margin: 'auto', marginTop: 10 }} />
        </div>
      )}
    </Project>
  );
};
export default Temp;
