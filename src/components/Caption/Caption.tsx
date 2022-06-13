import { FC } from "react"
import styled from "styled-components"

interface CaptionProps {
  text: string
  width?: string
  fontSize?: string
  color?: string
  margin?: string
  fontWeight?: string
}

type CaptionWrapperProps = Omit<CaptionProps, 'text'>

const CaptionWrapper = styled.div<CaptionWrapperProps>`
  width: ${({width}) => width ? width : '100%'};
  font-family: 'Hind Madurai', sans-serif;
  font-size: ${({fontSize}) => fontSize ? fontSize : '80px'};
  color: ${({color}) => color ? color : '#fff'};
  margin: ${({margin}) => margin ? margin : '0 auto'};
  letter-spacing: -1px;
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : '400'};
`

export const Caption: FC<CaptionProps> = ({ fontSize, color, text, width, margin, fontWeight }) => {
  return <CaptionWrapper fontSize={fontSize} color={color} width={width} margin={margin} fontWeight={fontWeight}>{text}</CaptionWrapper>
}