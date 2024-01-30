import axios, { AxiosInstance } from 'axios';
import { NextResponse, NextRequest } from 'next/server';
import { totalGamesCalculation } from '../../../../utils/total-games-calculation/total-games-calculation';

const client: AxiosInstance = axios.create({
  baseURL: 'http://api.steampowered.com/',
  params: {
    key: 'CBA0F257F52BAFD610ABF618F3CA42B0', // better to save key in more safer place
    format: 'json',
  },
});

export async function GET(request: NextRequest) {
  const steamId = request.nextUrl.searchParams.get('steamId');

  if (!steamId) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 400 }
    );
  }

  try {
    const response = await client.get('/IPlayerService/GetOwnedGames/v0001', {
      params: {
        steamid: steamId,
        include_appinfo: true,
      },
    });
    const gameArr = response.data.response?.games;

    if (!gameArr) {
      return NextResponse.json({ error: 'No game records' });
    }

    const stats = totalGamesCalculation(gameArr);

    return NextResponse.json(stats);
  } catch (e) {
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
