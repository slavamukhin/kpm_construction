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
  },
  {
    id: 4,
    title: 'For Pool',
    text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
    img: Bathrooms
  },
  {
    id: 5,
    title: 'For Decking',
    text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
    img: Kitchen
  },
  {
    id: 6,
    title: 'For Deck',
    text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
    img: Basement
  }
]

const ServiceCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const ServicesWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 120px 0 100px 0;

  @media (max-width: 1200px) {
    margin: 100px 0 80px 0;
  }

  @media (max-width: 960px) {
    margin: 90px 0 60px 0;
  }

  @media (max-width: 720px) {
    margin: 70px 0 30px 0;
  }

  @media (max-width: 430px) {
    margin: 50px 0 30px 0;
  }
`

export const Services: FC = () => {
  return <ServicesWrapper>
    <Caption main text="What are your needs?" fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <ServiceCardWrapper>
      {servicesCard.map(({id, title, text, img}: ServicesCard): ReactElement<typeof ServiceCard> => <ServiceCard key={id} title={title} text={text} img={img} />)}
    </ServiceCardWrapper>
  </ServicesWrapper>
}

