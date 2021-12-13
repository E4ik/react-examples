import React from 'react';
import './app.scss';

const Example6 = () => {
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  };
  let boxClassName = 'box';
  if (isGreen) {
    boxClassName += ' style-green';
    //= = 的話css就會消失
  }
  return (
    <section data-name="Example6StyleClassBind">
      <button className="my-btn" onClick={atClick}>
        isGreen
      </button>
      <div className={boxClassName} />
      <div
        // 不建議這麼做
        style={{
          width: 200,
          height: 200,
          backgroundColor: isGreen ? 'green' : 'red',
          display: isGreen ? 'block' : 'none',
        }}
      />
    </section>
  );
};
export default Example6;
