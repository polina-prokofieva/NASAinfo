import React, { useState, useEffect, useCallback , useMemo} from 'react';
import withData from '../../hoc-helpers/withData';
import { isScrolledToBottom } from '../../../utils/scrollUtils';
import TransferArticle from './TransferArticle/TransferArticle';
import ErrorBoundry from '../../ErrorBoundry/ErrorBoundry';
import styles from './TransferPage.module.scss';

const TransferPage = ({ data }) => {
  const { results } = data;
  const onlyFullData = useMemo(() => results.filter(post =>
    post[0] && post[2] && post[3] && post[10]
  ), [results]);
  
  const [posts, setPosts] = useState([onlyFullData[0]]);
  const isPlaceholder = posts.length < onlyFullData.length;

  const onScroll = useCallback(() => {
    if(posts.length >= onlyFullData.length) {
      window.removeEventListener('scroll', onScroll);
      return;
    }

    if (isScrolledToBottom()) {
      setPosts(prev => ([ ...prev, onlyFullData[prev.length] ]));
    }
  }, [onlyFullData, posts]);
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);
  
  useEffect(() => {
    onScroll();
  });

  return (
    <ErrorBoundry>
      <main className={ styles.TransferPage }>
        { posts.map(post => (
          <TransferArticle
            key={post[0]}
            title={post[2]}
            text={post[3]}
            category={post[5]}
            image={post[10]}
          />
        ))}
        { isPlaceholder && <div className={styles.placeholder}></div> }
      </main>
    </ErrorBoundry>
  );
};

export default withData(TransferPage);
