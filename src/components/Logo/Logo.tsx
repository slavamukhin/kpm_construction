import { FC } from "react"
import styled from "styled-components"
import logo from '../../img/logo-light.png'

const LogoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  margin: 10px 0;
`

const LogoImg = styled.img`
  @media (max-width: 430px) {
    width: 100px;
  }
`

export const Logo: FC = () => {
  return <LogoLink href="/">
    <LogoImg src={logo} alt="Logo" />;
  </LogoLink>
}