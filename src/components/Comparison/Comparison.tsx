import { FC } from "react";
import { Caption } from "../Caption";
import ReactCompareImage from 'react-compare-image';
import after from '../../img/after.jpg'
import before from '../../img/before.jpg'
import styled from "styled-components";

const ComparisonWrapper = styled.div`
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

export const Comparison: FC = () => {
  return <ComparisonWrapper>
    <Caption main text="Your bathroom will look like this..." fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <ReactCompareImage leftImageLabel='before' rightImageLabel="after" leftImage={after} rightImage={before} />;
  </ComparisonWrapper>
}