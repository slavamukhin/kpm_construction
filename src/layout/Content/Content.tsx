import { FC } from "react"
import styled from "styled-components"
import { ContentProps } from "../types"

const ContentWrapper = styled.div<ContentProps>`
  width: 1290px;
  min-width: 320px;
  padding: 0 20px;
  display: flex;
  justify-content: ${({contentPosition}) => contentPosition};
`

export const Content: FC<ContentProps> = ({ children, contentPosition }) => {
  return <ContentWrapper contentPosition={contentPosition}>{children}</ContentWrapper>
}