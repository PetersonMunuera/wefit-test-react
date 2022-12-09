import styled from "styled-components"
import { colors } from "~/styles/theme"

import ButtonStyle from '../Button/styles'
import CardStyle from "../Card/styles"

export default {
  Container: styled(CardStyle.Container)`
    h1 {
      margin-top: 7px;
      color: ${colors.textTitle};
      font-size: 12px;
      line-height: 16px;
    }    

    strong {
      margin-top: 2px;
      color: ${colors.text};
      font-size: 16px;
      line-height: 22px;
    }
  `,

  AddButton: styled(ButtonStyle.Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 8px;
    width: 100%;
    
    &:disabled {
      background-color: ${colors.success};
    }
    
    div {
      display: flex;
      align-items: center;
      margin-right: 12px;

      font-weight: 400;

      img {
        margin-right: 5px;
      }
    }

    strong {
      width: 157px;
      color: ${colors.light};
      text-transform: uppercase;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
    }
  `
}