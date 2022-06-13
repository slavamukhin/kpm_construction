import { FC } from "react"
import styled from "styled-components"
import { Logo } from "../Logo"
import { Phone } from "../Phone"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Header: FC = () => {
  return <HeaderWrapper>
    <Logo />
    <Phone />
  </HeaderWrapper>
}