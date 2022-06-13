import { FC } from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { Caption } from "../Caption"
import { Text } from "../Text"

const ContactWrapper = styled.div`
  margin: 120px 0;
  width: 50%;
`

export const Contact: FC = () => {
  return <ContactWrapper>
    <Caption text='Innovative Approach' fontSize="57px" color='#232a34' fontWeight="600"/>
    <Text text='Professional installation is key to the impeccable functioning of your pipes, faucets and heaters. Let us take care of the issues in your homes and offices today.' />
    <Button text='Contact Us' href="https://wa.me/16476884085?text="/>
  </ContactWrapper>
}