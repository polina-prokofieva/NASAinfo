import React from 'react';
import styles from "./Preview.module.scss";

const Preview = ({
  url, location, center, description, title, date_created, ...data
}) => {
  const content = {
    location, center, title,
    date: new Date(date_created).toString()
  };

  return (
    <li className={styles.Preview}>
      <img alt={location} src={url} />
      <div className={styles.description}>
        <ul className={styles.list}>
          { Object.keys(content).map(key => (
            <li key={key} className={styles.listItem}>
              <span className={styles.key}>{key}: </span>
              <span className={styles.value}>{content[key]}</span>
            </li>
          )) }
        </ul>
        <p className={styles.text}>{description}</p>
      </div>
    </li>
  );
};

export default Preview;
