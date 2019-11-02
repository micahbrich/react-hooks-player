# react-hooks-player
![alt player](example/assets/screenshot.png)

try it [here](https://vault-developer.github.io/react-hooks-player) =)

[![NPM](https://img.shields.io/npm/v/react-hooks-player.svg)](https://www.npmjs.com/package/react-hooks-player)
![NPM](https://img.shields.io/bundlephobia/minzip/react-hooks-player)
![NPM](https://img.shields.io/npm/l/react-hooks-player?)

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
      color={}           //default: '#4b598e'
      background={}      //default: 'white'
      volumeControls={}  //default: true
      height={}          //default: 50
    />
  )
}
```

## License

MIT © [vault-developer](https://github.com/vault-developer)

