import Card from '@mui/material/Card';
import Image from 'next/image';

import styles from './result-panel.module.scss';

import { GameType, GameStaticsType } from '../../../types';

const ResultPanel = ({
  gameStatistics,
}: {
  gameStatistics: GameStaticsType;
}) => {
  return (
    <section className={styles.resultPanel}>
      <Card variant="outlined" className={styles.card}>
        <h2>A bit about you:</h2>
        <dd>
          <p className={styles.extraLarge}>{gameStatistics.totalGames}</p>
          <p>games in your steam game list</p>
        </dd>
      </Card>
      <Card variant="outlined" className={styles.card}>
        <dd>
          <p>beat</p>
          {/* hardcode here, but good to get this number from api too */}
          <p className={styles.large}>99%</p>
          <p>of the player around world</p>
        </dd>
      </Card>

      <Card variant="outlined" className={styles.card}>
        <dd>
          <p>You spend</p>
          <p className={styles.large}>{gameStatistics.totalTimeInHrs}</p>
          <p>hrs on them</p>
        </dd>
      </Card>

      <Card variant="outlined" className={styles.card}>
        <dd>
          <p>Your favorite game is</p>
          <p className={styles.extraLarge}>{gameStatistics.mostPlayedGame}</p>
        </dd>
      </Card>

      {/* a pagination will be good here if too many games to display */}
      <h2 className={styles.gameDetailsHeader}>Your games details:</h2>
      <div className={styles.gameDetails}>
        {gameStatistics.refinedGames?.map((game: GameType) => {
          return (
            <Card
              variant="outlined"
              className={styles.gameGrid}
              key={game.appid}
            >
              {/* use image lib from next to do the lazy load */}
              <Image
                src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
                width={50}
                height={50}
                alt={game.name}
              />
              <h3>{game.name}</h3>
              <p>{game.playtime_forever} hrs</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export { ResultPanel };
