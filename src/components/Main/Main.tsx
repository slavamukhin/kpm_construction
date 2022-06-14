import { FC } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Caption } from "../Caption";

const MainWrapper = styled.div`
  margin: 320px 0 200px;
  text-align: center;

  @media (max-width: 900px) {
    margin: 280px 0 180px
  }

  @media (max-width: 700px) {
    margin: 240px 0 150px;
  }

  @media (max-width: 430px) {
    margin: 150px 0 100px;
  }

`


export const Main: FC = () => {
  return <MainWrapper>
    <Caption text='Pash Khoroshev Solution' fontSize="20px" submain/>
    <Caption main text='New renovation technology for your bathroom, kitchen, basement, pool, decking, deck' width="100%" margin='0 0 110px' fontWeight="600" fontSize="57px"/>
    <Button text='Text me in WhatsApp' href="https://wa.me/16476884085?text=" />
  </MainWrapper>
}