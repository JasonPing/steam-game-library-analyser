# Steam Game Library Analyser

### Requirements

- Node.js 18+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/JasonPing/steam-game-library-analyser.git
cd steam-game-library-analyser
npm install
```

Then, you can run locally in development mode with live reload:

```shell
nx serve web
```

if nx is not found, run below

```shell
npm install -g nx
```

Open http://localhost:4200 with your favorite browser to see your project.

### Optimization

1. I feel like the color theme can be changed to dark mode to be more attracive for gamer
2. The api call can be replaced with useSWR hook to add more caching feature
3. when a steamid with massive game information, we can use pagenation to display the result. Also help to save the payload, but I have no time to figure out how to get limit records from steam api
4. If more and more features added, it is better to move the result panel to anther page. Just put one search input box in the middle of the home page and redirect to another result page to see all the details. Then we can fully utilis nextjs page level SSR and SSG.

### Brain storming

1. I notice there is friend list api, it will be cool to let user click on their friend avatar to check their game statistics. What they have been palying recently, what new games they have brought, etc..
2. It will be cool to display the personal profile after steam id search, not only the games they owned, how many hours they spend. But also the achievement they have made in each game, each gamer can customise what achievement can be shown in their persianl profile. Maybe a shareable functionality to allow them to share it in media post.
3. It is also worth to displying their overal achievement score has beaten how much percentage of gamer around world.
4. Maybe some game recommended for you? Based on their previous game history.
