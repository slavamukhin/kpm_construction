import { FC } from "react"
import styled from "styled-components"
import { content } from "../../content"
import { Button } from "../Button"
import { Caption } from "../Caption"
import { Text } from '../Text'

const TitlingWrapper = styled.div`
  margin: 120px 0;
  width: 50%;

  @media (max-width: 720px) {
    margin: 60px 0;
    width: 100%;
  }
`



export const Tiling: FC = () => {
  return <TitlingWrapper>
      <Caption main text={content.tiling.title} fontSize="57px" color='#232a34' fontWeight="600"/>
      <Text text={content.tiling.text} />
      <Button text={content.tiling.button} href="https://wa.me/16476884085?text=" />
  </TitlingWrapper>
}