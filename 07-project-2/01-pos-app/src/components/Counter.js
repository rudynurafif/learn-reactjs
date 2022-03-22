import React from 'react'
import styled from 'styled-components'

const CounterStyle = styled.div`
  width: 1rem;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.light};
  height: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default function Counter({ inc, dec}) {
  if (inc) {
    return <CounterStyle onClick={inc}>+</CounterStyle>
  } else if (dec) {
    return <CounterStyle onClick={dec}>-</CounterStyle>
  }
}