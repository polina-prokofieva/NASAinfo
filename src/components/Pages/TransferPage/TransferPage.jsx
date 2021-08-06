import React from 'react';
import withData from '../../hoc-helpers/withData';
import styles from './TransferPage.module.scss';

const TransferPage = ({ data }) => {
  const { results } = data;
  const onlyFullData = results.filter(post =>
    post[0] && post[2] && post[3] && post[10]
  );

  const posts = onlyFullData.slice(0, 10);

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
}
 
export default withData(TransferPage);
