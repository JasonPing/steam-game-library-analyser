import { GameArrayType } from '../../types';

const totalGamesCalculation = (gameArr: GameArrayType) => {
  let maxPlayTime = 0;
  let mostPlayedGame = '';
  let totalTime = 0;
  const totalGames = gameArr.length;

  const refinedGames = [];
  // use one loop to get all necessary info
  for (const game of gameArr) {
    // make sure it is number rather than string
    const playTime = Number(game.playtime_forever);
    if (playTime > maxPlayTime) {
      maxPlayTime = playTime;
      mostPlayedGame = game.name;
    }
    totalTime += playTime;

    refinedGames.push({
      appid: game.appid,
      name: game.name,
      playtime_forever: Number(game.playtime_forever / 60).toFixed(1),
      img_icon_url: game.img_icon_url,
    });
  }

  return {
    totalGames,
    mostPlayedGame,
    totalTimeInHrs: Number(totalTime / 60).toFixed(1),
    refinedGames,
  };
};

export { totalGamesCalculation };
