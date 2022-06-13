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
`

export const Comparison: FC = () => {
  return <ComparisonWrapper>
    <Caption text="Your bathroom will look like this..." fontSize="57px" color='#232a34' fontWeight="600" margin="0 0 40px 0"/>
    <ReactCompareImage leftImageLabel='before' rightImageLabel="after" leftImage={after} rightImage={before} />;
  </ComparisonWrapper>
}