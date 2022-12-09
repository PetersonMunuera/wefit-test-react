import styled from "styled-components"
import { colors } from "~/styles/theme"

export default {
  Button: styled.button`
    background-color: ${colors.primary};
    height: 40px;
    border-radius: 4px;
    
    color: ${colors.light};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
  `
}