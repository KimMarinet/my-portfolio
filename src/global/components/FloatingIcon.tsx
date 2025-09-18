import React from 'react'
import styled, { css } from 'styled-components'

type FloatingIconType = {
  bottom?: number
  background?: string
  children?: React.ReactNode
  onClick?: () => void
}

const IconWrapper = styled.div<FloatingIconType>`
  position: fixed;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #ffd93d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
  z-index: 999;

  ${({ bottom }) => css`
    bottom: ${bottom ?? 30}px;
  `}

  ${({ background }) => css`
    background-color: ${background};
  `}

  &:hover {
    transform: scale(1.1);
  }
`

const FloatingIcon = ({bottom, background, children, onClick,}: FloatingIconType) => {
  
  return (
    <IconWrapper
      onClick={onClick}
      bottom={bottom}
      background={background}
    >
      {children}
    </IconWrapper>
  )
}

export default React.memo(FloatingIcon)
