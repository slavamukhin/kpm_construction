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

  @media (max-width: 600px) {
    text-align: right;
    &:first-child {
      margin-bottom: 10px;
      margin-right: 0;
    }
  }
`

const PhoneWrapper = styled.div`
  font-size: 18px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  @media (max-width: 430px) {
    font-size: 14px;
  }
`

export const ContactInfo: FC = () => {
  return <PhoneWrapper>
    <ContactLink href="tel:+16476884085">+1 647 688 40 85</ContactLink>
    <ContactLink href="mailto:kpm_construction@infor.com">kpm_construction@infor.com</ContactLink>
  </PhoneWrapper>
}