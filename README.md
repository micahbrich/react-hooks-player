# audio-player-react

> ui and audio tag wrapper for react

[![NPM](https://img.shields.io/npm/v/audio-player-react.svg)](https://www.npmjs.com/package/audio-player-react)

## Install

```bash
npm install --save audio-player-react
```

## Usage

```jsx
import React from 'react'
import Player from 'audio-player-react'

const App = () => {
  return (
    <Player 
      url={}             //required
      title={}           //required
      color={}           //default: '#9582ab'
      background={}      //default: 'white'
      volumeControls={}  //default: false
      height={}          //default: 50
    />
  )
}
```

## License

MIT © [vault-developer](https://github.com/vault-developer)

