import React from 'react';
import styles from './TopSongs.module.css';

const TopSongs = ({ topSongs, getGenius }) => {
//   console.log(topSongs);
  const renderTopSongs = topSongs.map((song, idx) => {
    if (song.images) {
        return (
            <div className={styles['top-songs-container']} key={idx}>
                <h2>
                    {song.title}
                </h2>
                <div className={styles['song-image']}>
                    <img src={song.images.coverart} alt={song.title} />
                </div>
                <p className={styles['artist']} onClick={() => getGenius(song.subtitle)}>
                    {song.subtitle}
                </p>
            </div>
        )
    }
    else {
        return (
            <div />
        )
    }
})
  return (
    <div className={styles.TopSongs}>
      {renderTopSongs}
    </div>
  );
};

export default TopSongs;