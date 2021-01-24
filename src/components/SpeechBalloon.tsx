import React from 'react';
import { Words } from 'arwes';

interface IProps {
  title: string;
  show: boolean;
  backgroundColor: string;
  borderColor: string;
  start?: number;
}

const SpeechBalloonComponent: React.FC<IProps> = (props) => {
  const startTime = props.start ?? 0;
  const waitTime = 200;
  return (
    <div>
      <div
        style={{
          display: 'inline-block',
          borderRadius: '10px 10px 10px 10px',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: props.borderColor,
          backgroundColor: props.backgroundColor,
          padding: '10px 20px',
          margin: '0 10px 10px 10px',

          // アニメーション
          transition: `opacity ${startTime + waitTime}ms ${startTime}ms ease`,
          opacity: props.show ? 1 : 0,
        }}
      >
        <Words animate show={props.show}>
          {props.title}
        </Words>
      </div>
      <div
        style={{
          display: 'inline-block',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `solid 1px ${props.borderColor}`,
          backgroundColor: props.backgroundColor,
          marginRight: '10px',
          marginBottom: '10px',
          verticalAlign: 'bottom',

          // アニメーション
          transition: `opacity ${startTime + 2 * waitTime}ms ${startTime + waitTime}ms ease`,
          opacity: props.show ? 1 : 0,
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          width: '13px',
          height: '13px',
          borderRadius: '50%',
          border: `solid 1px ${props.borderColor}`,
          backgroundColor: props.backgroundColor,
          marginRight: '10px',
          marginBottom: '10px',
          verticalAlign: 'bottom',

          // アニメーション
          transition: `opacity ${startTime + 3 * waitTime}ms ${startTime + 2 * waitTime}ms ease`,
          opacity: props.show ? 1 : 0,
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          border: `solid 1px ${props.borderColor}`,
          backgroundColor: props.backgroundColor,
          marginBottom: '10px',
          verticalAlign: 'bottom',

          // アニメーション
          transition: `opacity ${startTime + 4 * waitTime}ms ${startTime + 3 * waitTime}ms ease`,
          opacity: props.show ? 1 : 0,
        }}
      ></div>
    </div>
  );
};

export default SpeechBalloonComponent;
