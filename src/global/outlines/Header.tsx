import React from 'react'
import styled from 'styled-components'
import { FaFeatherPointed } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #facc15, #f97316, #ec4899);
  border-radius: 12px;
  margin: 35px 20px 0 20px;
  z-index: 999;

  .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        max-width: 100% !important;
        padding: 0 25px;
  }
`

const LinkStyled = styled(Link)`
    display: inline-block;
    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.2);
        color: #7e22ce;
    }
`

const Header = () => {

  return (
    <StyledHeader>
      <div className="inner">
        <LinkStyled to="/port"><strong>Portfolio</strong></LinkStyled>
        <FaFeatherPointed />
      </div>
    </StyledHeader>
  )
}

export default React.memo(Header)
