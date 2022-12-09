import styled from "styled-components"
import { colors, devices } from '~/styles/theme'

import ButtonStyle from '~/components/Button/styles'
import CartStyle from '~/components/Card/styles'

export default {
  CartCard: styled(CartStyle.Container)`
    padding: 16px;
    min-height: calc(100vh - 84px);

    @media ${devices.desktop} {
      min-height: auto;
      padding: 24px;
    }
  `,
  CartHeader: styled.header`
    width: 100%;
    display: none;
    margin-bottom: 20px;

    @media ${devices.tablet} {
      display: flex;
      justify-content: space-between;
    }

    span {
      color: ${colors.textLight};
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
    }

    div {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }

    span:nth-child(2) {
      margin-left: 70px;
    }
  `,
  FinishOrder: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: 20px;
    margin-top: auto;
    border-top: 1px solid ${colors.borderDark};

    @media ${devices.tablet} {
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }

    @media ${devices.desktop} {
      margin-top: 20px;
    }
    
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
  `,
  FinishButton: styled(ButtonStyle.Button)`
    width: 100%;
    margin-top: 16px;

    @media ${devices.tablet} {
      max-width: 235px;
      margin: 0;
    }
  `
}