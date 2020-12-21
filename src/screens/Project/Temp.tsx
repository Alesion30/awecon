import React from 'react';
import { Project, Words } from 'arwes';
import { Anim } from '../../data/model/Anim';
import TempChart from '../../components/TempChart';
import { PastData } from '../../data/model/PastData';
import { CurrentData } from '../../data/model/CurrentData';
import { useWindowDimensions } from '../../util/dimensions';
import { formatTimestamp } from '../../util/timestamp';
import { FirebaseStatus } from '../../data/model/FirebaseStatus';

interface IProps {
  data: PastData[];
  currentData: CurrentData;
  firebaseStatus: FirebaseStatus;
}

const Temp: React.FC<IProps> = (props: IProps) => {
  const { width } = useWindowDimensions(); // 画面サイズ

  // 期間の表示
  const range =
    props.data.length > 0
      ? `${formatTimestamp(props.data[0].date, 'MM月DD日HH時mm分')} ~ ${formatTimestamp(
          props.data[props.data.length - 1].date,
          'MM月DD日HH時mm分'
        )}`
      : null;
  let text: string;
  switch (props.firebaseStatus.status) {
    case 0:
      text = '現在、データを取得中です';
      break;
    case 1:
      text = range ? `${range}の室温データを表示しています。` : 'データがありません';
      break;
    case 2:
      text = 'Firebaseとの接続に失敗しました。';
      break;
  }

  return (
    <Project animate header={`現在の室温: ${props.currentData.temperature ?? '-'}℃`}>
      {(anim: Anim) => (
        <div>
          <div style={{ width: width * 0.75, margin: 'auto', marginTop: 30 }}>
            <Words animate show={anim.entered}>
              {text}
            </Words>
          </div>
          <TempChart data={props.data} width={width * 0.8} height={400} style={{ margin: 'auto', marginTop: 10 }} />
        </div>
      )}
    </Project>
  );
};
export default Temp;
