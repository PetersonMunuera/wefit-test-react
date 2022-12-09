import styled from "styled-components"
import { colors } from "~/styles/theme"

export default {
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: ${colors.text};

    li {
      display: flex;

      &>div {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      &>img {
        margin-right: 16px;
      }

      &+li {
        padding-top: 24px;
        border-top: 1px solid ${colors.borderLight};
      }

      button {
        display: flex;
        background-color: transparent;
      }
    }
  `,
  Info: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    h1 {
      font-size: 14px;
    }

    &>div {
      display: flex;
      align-items: center;
    }

    button {
      margin-left: 16px;
    }
  `,
  Price: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  `,
  AmountHandler: styled.div`
    display: flex;
    align-items: center;

    span {
      width: 60px;
      margin: 0 10px;
      padding: 3px 12px;
      border: 1px solid ${colors.borderLight};
      border-radius: 4px;
      font-size: 14px;
    }
  `,
  Subtotal: styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;

    h2 {
      font-size: 12px;
      color: ${colors.textLight};
      text-transform: uppercase;
    }
  `
}