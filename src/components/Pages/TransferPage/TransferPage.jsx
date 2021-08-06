import React, { useState, useEffect, useCallback } from 'react';
import withData from '../../hoc-helpers/withData';
import { isScrolledToBottom } from '../../../utils/scrollUtils';
import styles from './TransferPage.module.scss';

const TransferPage = ({ data }) => {
  const { results } = data;
  const onlyFullData = results.filter(post =>
    post[0] && post[2] && post[3] && post[10]
  );

  const [posts, setPosts] = useState(onlyFullData.slice(0, 2));

  const onScroll = useCallback(() => {    
    if (isScrolledToBottom()) {
      setPosts(prev => ([ ...prev, onlyFullData[prev.length] ]));
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [onScroll]);
   
  return (
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
      <div className={styles.placeholder}></div>
    </main>
  );
};

const TransferArticle = ({ title, text, category, image }) => {
  return (
    <div className={styles.TransferArticle}>
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
