import React from 'react';
import { Words } from 'arwes';
import { useWindowDimensions } from '../util/dimensions';

interface IProps {
  title: string;
  show: boolean;
  backgroundColor: string;
  borderColor: string;
  start?: number;
}

const SpeechBalloonComponent: React.FC<IProps> = (props) => {
  const width = useWindowDimensions().width;
  const isMobile = width < 700;
  const startTime = props.start ?? 0;
  const waitTime = 500;
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
          transition: `opacity ${waitTime}ms ${startTime}ms ease`,
          opacity: props.show ? 1 : 0,
        }}
      >
        <Words animate show={props.show}>
          {props.title}
        </Words>
      </div>
      {!isMobile && (
        <React.Fragment>
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
              transition: `opacity ${waitTime}ms ${startTime + waitTime}ms ease`,
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
              transition: `opacity ${waitTime}ms ${startTime + 2 * waitTime}ms ease`,
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
              transition: `opacity ${waitTime}ms ${startTime + 3 * waitTime}ms ease`,
              opacity: props.show ? 1 : 0,
            }}
          ></div>
        </React.Fragment>
      )}
    </div>
  );
};

export default SpeechBalloonComponent;
