import React from 'react'
import { useMyHook } from 'audio-player-react'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App