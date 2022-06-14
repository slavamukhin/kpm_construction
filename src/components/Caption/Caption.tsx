import { FC } from "react"
import styled from "styled-components"

interface CaptionProps {
  text: string
  width?: string
  fontSize?: string
  color?: string
  margin?: string
  fontWeight?: string
  main?: boolean
  submain?: boolean
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

  @media (max-width: 1100px) {
    font-size: 23px;
  }

  @media (max-width: 720px) {
    font-size: 22px;
  }

  ${({main}) => main ? `

    @media (max-width: 1200px) {
      font-size: 46px;
    }

    @media (max-width: 960px) {
      font-size: 38px;
    }

    @media (max-width: 720px) {
      font-size: 30px;
    }

    @media (max-width: 430px) {
      font-size: 26px;
    }
  ` : ``}

  ${({submain}) => submain ? `

    @media (max-width: 720px) {
      font-size: 13px;
    }
  ` : ``}
`

export const Caption: FC<CaptionProps> = (
  { 
    fontSize, 
    color, 
    text, 
    width, 
    margin, 
    fontWeight, 
    main, 
    submain 
  }
  ) => {
  return (
    <CaptionWrapper 
      fontSize={fontSize}
      color={color}
      width={width}
      margin={margin}
      fontWeight={fontWeight} 
      main={main} 
      submain={submain}
    >
        {text}
    </CaptionWrapper>
  )
}