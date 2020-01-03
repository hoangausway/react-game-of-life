import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WebCell = ({ alive, col, row, toggleEmit }) => {
  const clickHandler = e => toggleEmit({ ...e, detail: { col, row } })
  return <StyledCell alive={alive} onClick={clickHandler} />
}

WebCell.propTypes = {
  alive: PropTypes.bool,
  col: PropTypes.number,
  row: PropTypes.number,
  toggleEmit: PropTypes.func
}

export default WebCell

// Helpers CSS
const StyledCell = styled.div`
  display: 'block';
  cursor: 'pointer';
  width: '100%';
  height: '100%';
  border: '1px solid gray';
  background: ${props => (props.alive ? 'MidnightBlue' : 'AliceBlue')};
`
