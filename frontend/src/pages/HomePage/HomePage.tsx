import { useState } from "react";

import * as classes from "./home.module.scss";

export const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handlePlus = (): void => {
    setCount(prev => prev + 1);
  };

  const handleMinus = (): void => {
    setCount(prev => prev - 1);
  };

  return (
    <div className={classes.page}>
      <button onClick={handlePlus}>plus</button>
      <button onClick={handleMinus}>minus</button>
      <span>{count}</span>
      <img src="https://media.kg-portal.ru/anime/k/k/images/k_33.jpg" />
    </div>
  );
};
