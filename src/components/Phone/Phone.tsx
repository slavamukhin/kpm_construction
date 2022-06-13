import { FC } from "react"
import styled from "styled-components"

const PnoneNumber = styled.a`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #e1e2e3;
  }
`

export const Phone: FC = () => {
  return <div>
    <PnoneNumber href="tel:+16476884085">+1 647 688 40 85</PnoneNumber>
  </div>
}