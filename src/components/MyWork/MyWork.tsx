import { FC } from "react"
import styled from "styled-components"
import { Slider } from '../Slider'
import { Caption } from "../Caption"


const MyWorkWrapper = styled.div`
  margin: 120px 0 120px 0;
  width: 100%;
  text-align: center;
`

export const MyWork: FC = () => {
  return <MyWorkWrapper>
    <Caption text="My Works" fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <Slider/>
  </MyWorkWrapper>
}