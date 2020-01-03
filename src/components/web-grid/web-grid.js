import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WebCell from '../web-cell/web-cell'

const WebGrid = ({ world, toggle }) => {
  const { arr, cols, rows } = world

  return (
    <StyledGrid cols={cols} rows={rows}>
      {arr.map((val, idx) => {
        const row = Math.floor(idx / cols)
        const col = idx - row * cols
        return (
          <WebCell key={idx} col={col} row={row} alive={val} toggle={toggle} />
        )
      })}
    </StyledGrid>
  )
}

WebGrid.propTypes = {
  world: PropTypes.objectOf(
    PropTypes.array,
    PropTypes.number,
    PropTypes.number
  ),
  toggle: PropTypes.func
}

export default WebGrid

// Helpers CSS
const StyledGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  border: 1px solid #fafafa;
`
