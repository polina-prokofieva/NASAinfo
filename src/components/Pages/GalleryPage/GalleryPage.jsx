import React from 'react';
import Preview from './Preview/Preview';
import ErrorBoundry from '../../ErrorBoundry/ErrorBoundry';
import withData from '../../hoc-helpers/withData';
import styles from './GalleryPage.module.scss';

const GalleryPage = ({ data }) => {
  const { collection } = data;
  const { items } = collection;

  const images = items.map(({ links, data }) => ({
    ...data[0],
    url: links[0].href,
  }));

  return (
    <ErrorBoundry>
      <main className={styles.GalleryPage}>
        <ul className={styles.content}>
          { images.map((image) => <Preview
            key={image.title}
            { ...image }
          />) }
        </ul>
      </main>
    </ErrorBoundry>
  );
};

export default withData(GalleryPage);
