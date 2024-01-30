'use client';

import { useState } from 'react';
import { InputBox } from '../input-box/input-box';
import { ResultPanel } from '../result-panel/result-panel';

import styles from './search-section.module.scss';
import axios from 'axios';

const SearchSection = () => {
  const [gameStatistics, setGameStatistics] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchSteamId = (steamId: string) => {
    setGameStatistics(null);
    setLoading(true);
    setIsError(false);
    // potentially change with SWR
    axios
      .get('api/steam/game-overall', {
        params: { steamId: steamId },
      })
      .then((res) => {
        setGameStatistics(res.data);
        setLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setLoading(false);
      });
  };

  return (
    <section className={styles.searchSection}>
      <h2>Please input your steam id </h2>
      <p>for example (76561197960434622)</p>
      <InputBox searchSteamId={searchSteamId} />
      {isLoading && <p>Loading...</p>}

      {isError && <p className={styles.error}>Something went wrong!</p>}

      {gameStatistics && <ResultPanel gameStatistics={gameStatistics} />}
    </section>
  );
};

export { SearchSection };
