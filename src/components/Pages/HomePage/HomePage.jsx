import React, { useState, useCallback } from 'react';
import PictureOfTheDay from '../../PictureOfTheDay/PictureOfTheDay';
import { today, getNextDay, getPrevDay, formatDate } from '../../../utils/dateUtils';
import styles from './HomePage.module.scss';

const SwitchDayContext = React.createContext();

const HomePage = ({ getData }) => {
  const [date, setDate] = useState(today);

  const memoizedGetData = useCallback(
    () => getData(formatDate(date)),
    [date]
  );

  const toPrevDay = () => { 
    setDate(prev => getPrevDay(prev)); 
  };
 
  const toNextDay = () => { 
    setDate(prev => getNextDay(prev)); 
  };

  const contextValues = { date, toPrevDay, toNextDay };

  return (
    <main className={styles.HomePage} id="homePage">
      <SwitchDayContext.Provider value={contextValues}>
        <PictureOfTheDay getData={memoizedGetData} />
      </SwitchDayContext.Provider>
    </main>
  );
};

export default HomePage;

export { SwitchDayContext };
