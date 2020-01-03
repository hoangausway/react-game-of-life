import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import useEventOfLife from './useEventOfLife'
import WebGrid from '../web-grid/web-grid'

const GameOfLife = ({ initialWorld, tick, active }) => {
  // states: world
  const [world, setWorld] = useState(initialWorld)

  // observers which will update states
  const worldObserver = setWorld
  const activeObserver = active => console.log(`Is paused? ${!active}`)
  const resetObserver = e => console.log('RESET - observed')

  /*
    wrapper of business logics of the game of life
    return a set of handlers/emitter which can be used to raise/trigger events
    from inside the wrapper, the observers will be called as events happen
  */
  const [resetEmit, activeEmit, toggleEmit] = useEventOfLife(
    [worldObserver, activeObserver, resetObserver],
    initialWorld,
    tick
  )

  // kick start with 'reset' event; also reset if initialWorld or tick changed
  useEffect(() => {
    if (initialWorld !== null && tick !== null) {
      setWorld(initialWorld)
      resetEmit(
        new window.CustomEvent('reset', {
          detail: { tick, world: initialWorld }
        })
      )
    }
    // eslint-disable-next-line
  }, [initialWorld, tick])

  // kick start by 'activate_pause' event; emits event 'activate_pause' if 'active' changed
  useEffect(() => {
    if (active !== null) activeEmit(new window.CustomEvent('activate_pause'))
    // eslint-disable-next-line
  }, [active])

  return <WebGrid world={world} toggle={toggleEmit} />
}

GameOfLife.defaultProps = {
  initialWorld: null,
  tick: 1000,
  active: true
}

GameOfLife.propTypes = {
  initialWorld: PropTypes.object,
  tick: PropTypes.number,
  active: PropTypes.bool
}

export default GameOfLife
