import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const WebCell = ({ alive, col, row, toggle }) => {
  const clickHandler = e => {
    const evt = { ...e, detail: { col, row } }
    toggle(evt)
  }
  return <StyledCell alive={alive} onClick={clickHandler} />
}

WebCell.propTypes = {
  alive: PropTypes.bool,
  col: PropTypes.number,
  row: PropTypes.number,
  toggle: PropTypes.func
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
