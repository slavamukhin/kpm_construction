import { FC } from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { Caption } from "../Caption"
import { Text } from "../Text"
import { content } from "../../content";

const ContactWrapper = styled.div`
  margin: 120px 0;
  width: 50%;

  @media (max-width: 720px) {
    margin: 60px 0;
    width: 100%;
  }
`

export const Contact: FC = () => {
  return <ContactWrapper>
    <Caption main text={content.contact.title} fontSize="57px" color='#232a34' fontWeight="600"/>
    <Text text={content.contact.text} />
    <Button text={content.contact.button} href="https://wa.me/16476884085?text="/>
  </ContactWrapper>
}