import { FC } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Caption } from "../Caption";

const MainWrapper = styled.div`
  margin: 320px 0 200px;
  text-align: center;
`


export const Main: FC = () => {
  return <MainWrapper>
    <Caption text='Pash Khoroshev Solution' fontSize="20px"/>
    <Caption text='New renovation technology for your bathroom' width="1100px" margin='0 0 110px' fontWeight="600"/>
    <Button text='Text me in WhatsApp' href="https://wa.me/16476884085?text=" />
  </MainWrapper>
}