import styled from "styled-components"
import { colors } from "~/styles/theme"

export default {
  Container: styled.div`
    background-color: ${colors.light};
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 10px;
    border-radius: 4px;
  `
}