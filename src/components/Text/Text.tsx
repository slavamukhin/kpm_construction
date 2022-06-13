import { FC } from "react"
import styled from "styled-components"

const TextWrapper = styled.div`
  color: #5c6164;
  font-size: 17px;
  margin: 20px 0;
  letter-spacing 0.1px;
  line-height 29.16px;
`

interface TextProps {
  text: string
}

export const Text: FC<TextProps> = ({ text }) => {
  return <TextWrapper>{text}</TextWrapper>
}