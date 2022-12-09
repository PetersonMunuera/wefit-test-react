import styled from "styled-components"
import CardStyle from '~/components/Card/styles'
import ButtonStyle from '~/components/Button/styles'
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
  `,
  BackButton: styled(ButtonStyle.Button)`
    width: 180px;
    margin-top: 32px;
  `
}