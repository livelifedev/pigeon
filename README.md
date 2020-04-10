# pigeon-breeder

Deployed: https://pigeon-guild.herokuapp.com

## Roadmap

- Health feature
- Feed feature
- User registration/profile
- Backend setup

## Mechanics

- \*\*Change - instead of focusing on health/hp, focus on 'growth', experience/evolution points

- Health - has health and hunger level - when hunger below threshold, auto deplete health
  -- overfeeding will also deplete health
  -- hunger is kept track using time of last fed and amount given
  -- sleep - pigeons sleep dusk to dawn
  -- play/exercise - during day

- Feed - Pigeons eat 2 times a day, feeding options include meal or snack
  -- initial feed schedule set up and info on breed of pigeon and consume amount
  -- feed pigeon meal in morning (8am) and meal in evening (4pm), 8 hours apart
  -- feeding on schedule important
  -- should be fed before sleep time
  -- breed of pigeon affects hunger and food consumption
  -- snacks are for breeds of pigeon that require consume more

- future considerations
  -- breed of pigeon affects when they go to sleep

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
