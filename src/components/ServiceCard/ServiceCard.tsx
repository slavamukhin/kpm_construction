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
`

const Image = styled.img`
  height: 315px;
  width: 100%;
  display: inherit;
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