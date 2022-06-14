import { FC } from "react"
import styled from "styled-components"
import { Slider } from '../Slider'
import { Caption } from "../Caption"


const MyWorkWrapper = styled.div`
  margin: 120px 0 120px 0;
  width: 100%;
  text-align: center;

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

export const MyWork: FC = () => {
  return <MyWorkWrapper>
    <Caption main text="My Works" fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <Slider/>
  </MyWorkWrapper>
}