import { FC } from "react"
import styled from "styled-components"
import { Content } from "../Content"
import { BlockProps, BlockWrapperProps } from "../types"

const BlockWrapper = styled.div<BlockWrapperProps>`
  display: flex;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'transparent'};
  background-image: ${({backgroundUrl}) => backgroundUrl ? `url('${backgroundUrl}')`: 'none'};
  background-size: cover;
  background-position: ${({backgroundPosition}) => backgroundPosition ? backgroundPosition : ''};
  background-repeat: no-repeat;
  ${({header}) => header ? `
    position: fixed;
    right: 0;
    left: 0;
    opacity: .8;
    z-index: 2;
  ` : ``}
  ${({left}) => left ? `

    @media (max-width: 1120px) {
      background-position: -270px 0;
    }

    @media (max-width: 940px) {
      background-position: -370px 0;
    }

    @media (max-width: 840px) {
      background-position: -470px 0;
    }

    @media (max-width: 720px) {
      background: none;
    }
  ` : ''}
  ${({right}) => right ? `

  ` : ''}
`

export const Block: FC<BlockProps> = (
  { 
    children, 
    contentPosition, 
    backgroundColor, 
    backgroundUrl, 
    header, 
    backgroundPosition, 
    left, 
    right 
  }) => {
  return (
    <BlockWrapper 
      backgroundColor={backgroundColor} 
      backgroundUrl={backgroundUrl} 
      header={header} 
      backgroundPosition={backgroundPosition} 
      left={left} 
      right={right}
    >
      <Content contentPosition={contentPosition}>
        {children}
      </Content>
    </BlockWrapper>
  )
}