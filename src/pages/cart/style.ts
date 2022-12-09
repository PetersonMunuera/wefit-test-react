import styled from "styled-components"
import CartStyle from '~/components/Card/styles'
import { colors, devices } from '~/styles/theme'

export default {
  CartCard: styled(CartStyle.Container)`
    padding: 16px;
    min-height: calc(100vh - 84px);
    justify-content: space-between;

    @media ${devices.desktop} {
      min-height: auto;
    }
  `,
  FinishOrder: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    

    div {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        margin-right: 20px;
        color: ${colors.textLight};
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
      }

      strong {
        font-size: 24px;
      }
    }

    button {
      width: 100%;
      margin-top: 16px;
      background-color: ${colors.primary};
      height: 40px;
      border-radius: 4px;
      color: ${colors.light};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
    }
  `
}