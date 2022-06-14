import { FC } from "react"
import styled from "styled-components"

const ContactLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #e1e2e3;
  }
`

export const Phone: FC = () => {
  return <div>
    <ContactLink href="tel:+16476884085">+1 647 688 40 85</ContactLink>
    <ContactLink href="mailto:kpm_construction@infor.com">kpm_construction@infor.com</ContactLink>
  </div>
}