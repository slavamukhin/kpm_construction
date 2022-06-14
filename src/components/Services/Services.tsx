import { FC, ReactElement } from "react";
import { Caption } from "../Caption";
import { ServiceCard } from "../ServiceCard";
import styled from "styled-components";
import { content } from "../../content";

export interface ServicesCard {
  id: number,
  title: string,
  text: string,
  img: string
}

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
    <Caption main text={content.services.title} fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <ServiceCardWrapper>
      {content.services.servicesCard.map(({id, title, text, img}: ServicesCard): ReactElement<typeof ServiceCard> => <ServiceCard key={id} title={title} text={text} img={img} />)}
    </ServiceCardWrapper>
  </ServicesWrapper>
}

