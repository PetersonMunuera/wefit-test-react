import styled from "styled-components"
import CardStyle from '~/components/Card/styles'
import { colors, devices } from "~/styles/theme"

export default {
  Container: styled(CardStyle.Container)`
    padding: 64px 0;
    text-align: center;
    overflow: hidden;
    
    h1 {
      font-size: 20px;
      line-height: 27px;
      margin-bottom: 32px;
      max-width: 200px;

      @media ${devices.desktop} {
        max-width: 100%;
      }
    }

    button {
      background-color: ${colors.primary};
      margin-top: 32px;
      width: 180px;
      height: 40px;
      border-radius: 4px;

      color: ${colors.light};
      font-weight: 700;
      font-size: 14px;
      line-height: 40px;

      &::before {
        content: '';
        width: 100%;
        height: 1.5px;
        background-color: ${colors.background};
      }
    }
  `
}