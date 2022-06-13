import { FC } from "react"
import styled from "styled-components"
import { Button } from "../Button"
import { Caption } from "../Caption"
import { Text } from '../Text'

const TitlingWrapper = styled.div`
  margin: 120px 0;
  width: 50%;
`



export const Tiling: FC = () => {
  return <TitlingWrapper>
      <Caption text='Titling installation' fontSize="57px" color='#232a34' fontWeight="600"/>
      <Text text='Today, the technology allows creating all types of titling parts and accessories for your home and office. We use premium products and quality service.' />
      <Button text='Request a titler' href="https://wa.me/16476884085?text=" />
  </TitlingWrapper>
}