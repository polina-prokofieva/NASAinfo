import React, { useState, useEffect, useCallback , useMemo} from 'react';
import withData from '../../hoc-helpers/withData';
import { isScrolledToBottom } from '../../../utils/scrollUtils';
import { getClasses } from '../../../utils/common';
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

const TransferArticle = ({ title, text, category, image }) => {
  const [classesList, setClassesList] = useState([styles.TransferArticle]);

  useEffect(() => {
    setClassesList(prev => [ ...prev, styles.rendered ]);
  }, []);

  const classes = getClasses(classesList);

  return (
    <div className={classes}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.content}>
        { image && <figure>
          <img src={image} alt={title} />
        </figure> }

        <article>
          <p className={styles.text}>{text}</p>
          <p className={styles.category}>
            <span>
              {category}
            </span>
          </p>
        </article>
      </div>
    </div>
  );
};

export default withData(TransferPage);
