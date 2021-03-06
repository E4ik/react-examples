import React from 'react';

import './closure01';
// import './closure02';

const Example = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Count is: ${count}`);
    }, 2000);
    //
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section data-name="Example7useEffectClosureAdvance">
      <h2>
        count:
        {count}
      </h2>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </section>
  );
};
export default Example;
