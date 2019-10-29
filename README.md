# react-hooks-player

> audio tag wrapper & UI for react

[![NPM](https://img.shields.io/npm/v/react-hooks-player.svg)](https://www.npmjs.com/package/react-hooks-player)

## Install

```bash
npm install --save react-hooks-player
```

## Usage

```jsx
import React from 'react'
import Player from 'react-hooks-player'

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

