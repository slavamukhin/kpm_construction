import { FC, ReactElement } from "react";
import { Caption } from "../Caption";
import { ServiceCard } from "../ServiceCard";
import Kitchen from '../../img/kitchen.jpg'
import Bathrooms from '../../img/bathroom.jpg'
import Basement from '../../img/basement.jpg'
import styled from "styled-components";


export interface ServicesCard {
  id: number,
  title: string,
  text: string,
  img: string
}

const servicesCard: Array<ServicesCard> = [
  {
    id: 1,
    title: 'For Bathrooms',
    text: 'We turn your old bathrooms into brand new modern and fully functioning rooms with high-quality plumbing.',
    img: Bathrooms
  },
  {
    id: 2,
    title: 'For Kitchen',
    text: 'Kitchen is a number one room in every home, and it requires special attention while doing pipe repairs.',
    img: Kitchen
  },
  {
    id: 3,
    title: 'For Basement',
    text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
    img: Basement
  }
]

const ServiceCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ServicesWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 120px 0 120px 0;
`

export const Services: FC = () => {
  return <ServicesWrapper>
    <Caption text="What are your needs?" fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <ServiceCardWrapper>
      {servicesCard.map(({id, title, text, img}: ServicesCard): ReactElement<typeof ServiceCard> => <ServiceCard key={id} title={title} text={text} img={img} />)}
    </ServiceCardWrapper>
  </ServicesWrapper>
}

