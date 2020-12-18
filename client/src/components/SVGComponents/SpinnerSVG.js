import React from 'react';

const SpinnerSVG = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        style={{
          position: 'fixed',
          background: 'none',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
        width='100'
        height='100'
        display='block'
        preserveAspectRatio='xMidYMid'
        viewBox='0 0 100 100'
      >
        <circle
          cx='50'
          cy='50'
          r='37'
          fill='none'
          stroke='#1890ff'
          strokeDasharray='174.35839227423352 60.119464091411174'
          strokeWidth='10'
        >
          <animateTransform
            attributeName='transform'
            dur='1s'
            keyTimes='0;1'
            repeatCount='indefinite'
            type='rotate'
            values='0 50 50;360 50 50'
          ></animateTransform>
        </circle>
      </svg>
    </>
  );
};

export default SpinnerSVG;
