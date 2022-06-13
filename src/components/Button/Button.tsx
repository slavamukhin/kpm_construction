import { FC } from "react"
import styled from "styled-components"

const ButtonWrapper = styled.a<ButtonWrapperProps>`
  font-family: 'Hind Madurai', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  border-radius: 5px;
  background-color: #fdac2b;
  padding: 20px;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: 0 3px 60px rgb(0 0 0 / 20%);
  &:hover {
    background-color: #e59617
  }
  ${({block}) => block ? `
    width: 100%
  ` : ``}
`

interface ButtonProps {
  text: string
  block?: boolean
  href: string
}

type ButtonWrapperProps = Pick<ButtonProps, 'block'>

export const Button: FC<ButtonProps> = ({ text, block, href }) => {
  return <ButtonWrapper block={block} href={`${href}I clicked the button with text: ${text}`} target="_blank">{text}</ButtonWrapper>
}