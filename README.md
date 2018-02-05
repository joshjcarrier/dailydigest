## Prerequisites

```sh
brew install node
brew install watchman
brew install yarn
```

### Getting Started

```sh
yarn start
```

### Updating server schema

1. Edit `./server/types.graphql`
2. `./node_modules/.bin/graphcool deploy` and type in `dailydigest` for the
   project
3. Update `./serverconfig.json` if the url changes
