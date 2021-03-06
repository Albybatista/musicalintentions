import React from 'react';
import styles from './Hits.module.css';

const Hits = ({ hits, setHits }) => {
  // for back button
  const resetHits = () => {
    setHits([]);
  };

  // render hits
  const renderHits = hits.map((hit, idx) => {
    return (
      <div className={styles['hit-container']} key={idx}>
        <h2>
          {hit.result.title}
        </h2>
        <div className={styles['hit-image']}>
          <img src={hit.result.header_image_thumbnail_url} alt={hit.result.full_title} />
        </div>
        <div className={styles['hit-pageviews']}>
          <p className={styles['artist-name']}>
            {hit.result.primary_artist.name}
          </p>
          <p>
            views: {hit.result.stats.pageviews}
          </p>
        </div>
      </div>
    );
  });
  
  return (
    <div className={styles['Hits']}>
      <button onClick={() => resetHits()}>
          back
      </button>
      <h1>
        Popular Tracks by Artist
      </h1>
      { renderHits }
    </div>
  );
};

export default Hits;