import React, { useEffect, useState } from 'react'
import './App.css'
import GameOfLife from './components/game-of-life/game-of-life'

// sample patterns
import { patterns } from './components/game-of-life/patterns'
import { drawPattern } from './components/game-of-life/rulesOfLife'

const pattern = {
  matrix: patterns['QUEEN_BEE_SHUTTLE'], // a sample pattern
  col0: 5,
  row0: 5
}
const WORLD = drawPattern(40, 40, pattern)

function App () {
  const [initialWorld, setInitialWorld] = useState(WORLD)
  const [active, setActive] = useState(true)
  const [tick] = useState(1000)

  const [isPaused, setIsPaused] = useState(false)
  const pauseHandler = e => {
    const paused = e.target.classList.toggle('paused')
    e.target.textContent = paused ? 'CONTINUE' : 'PAUSE'
    setIsPaused(!isPaused)
  }

  const resetHandler = e => {
    setInitialWorld(null)
    setTimeout(function () {
      setInitialWorld(initialWorld)
    }, 200)
  }

  useEffect(() => {
    setActive(!isPaused)
  }, [isPaused])

  return (
    <div>
      <button className='reset' onClick={resetHandler}>
        RESET
      </button>
      <button onClick={pauseHandler}>PAUSE</button>
      <div className='gol-container'>
        <GameOfLife active={active} tick={tick} initialWorld={initialWorld} />
      </div>
      <div className='note'>
        <p><b>React component GameOfLife</b>:</p>
        <p>After each tick, cells become dead or alive.</p>
        <p>Click on the cells will change the course of evolution</p>
        <p>
          <b>Note:</b> The game was started with famous pattern named "Queen Bee
          Shuttle".
        </p>
        <p>
          A comprehensive list of patterns can be found in file patterns.js from
          source codes.
        </p>
        <p>
          <b>For game description please see:</b>{' '}
          <a href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life">
            Conway's Game Of Life
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
