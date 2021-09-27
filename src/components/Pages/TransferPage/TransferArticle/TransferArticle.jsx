import React from 'react';
import withRenderAnimation from '../../../hoc-helpers/withRenderAnimation';
import classNames from 'classnames';
import styles from './TransferArticle.module.scss';

const TransferArticle = ({ title, text, category, image, rendered }) => {
  const classes = classNames({
    [styles.TransferArticle]: true,
    [styles.rendered]: rendered
  });
  
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

export default withRenderAnimation(TransferArticle);
