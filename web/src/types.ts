interface GameType {
  appid: string;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
}

type GameArrayType = GameType[];

interface GameStaticsType {
  totalGames: number;
  mostPlayedGame: string;
  totalTimeInHrs: number;
  refinedGames: GameArrayType;
}

export type { GameArrayType, GameStaticsType, GameType };
