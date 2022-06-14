import { FC } from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { Caption } from "../Caption"
import { ServicesCard } from "../Services/Services"
import { Text } from '../Text'

type ServiceCardProps = Pick<ServicesCard, 'title' | 'text' | 'img'>

const ServiceCardWrapper = styled.div`
  width: 32%;
  box-shadow: 0 3px 60px rgb(0 0 0 / 4%);
  padding: 0 20px 40px 0;

  &:nth-child(3n) {
    padding-right: 0;
  }

  @media (max-width: 1130px) {
    width: 40%;

    &:nth-child(3n) {
      padding: 0 20px 40px 0;
    }

    &:nth-child(2n) {
      padding-right: 0;
    }
  }

  @media (max-width: 915px) {
    width: 46%;
  }

  @media (max-width: 805px) {
    width: 90%;
    padding-right: 0;

  }

  @media (max-width: 430px) {
    padding-bottom: 20px;
    width: 100%;
    &:nth-child(3n) {
      padding-right: 0;
    }
  }
`

const Image = styled.img`
  height: 315px;
  width: 100%;
  display: inherit;
  object-fit: cover;
`

const ServiceCardContentWrapper = styled.div`
  background-color: #fff;
  padding: 40px 25px;
`

export const ServiceCard: FC<ServiceCardProps> = ({title, text, img}) => {
  return <ServiceCardWrapper>
    <Image src={img} alt={title} />
    <ServiceCardContentWrapper>
      <Caption text={title} fontSize='28px' fontWeight="600" color="#232a34"/>
      <Text text={text}/>
      <Button text={`request ${title}`} block href="https://wa.me/16476884085?text="/>
    </ServiceCardContentWrapper>
  </ServiceCardWrapper>
}