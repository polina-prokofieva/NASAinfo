import React, { useMemo } from 'react';
import NASAAPIService from '../../../services/NASAAPIService';
import styles from './TransferPage.module.scss';

const TransferPage = () => {
  const nasaService = useMemo(() => new NASAAPIService(), [null]);

  return (
    <main className={ styles.TransferPage }>
      <h5>TransferPage</h5>
    </main>
  );
};
 
export default TransferPage;
