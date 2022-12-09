import styled from "styled-components"
import { colors, devices } from "~/styles/theme"

export default {
  List: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${colors.text};

    li {
      display: flex;

      &>div {
        width: 100%;
        display: flex;
        flex-direction: column;

        @media ${devices.tablet} {
          flex-direction: row;
          justify-content: space-between;
        }
      }

      &>img {
        margin-right: 16px;
      }

      &+li {
        padding-top: 20px;
        border-top: 1px solid ${colors.borderLight};
      }
    }
  `,
  Info: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;

    @media ${devices.tablet} {
      flex-direction: column;
      justify-content: center;

      h1 {
        margin-bottom: 8px;
      }
    }

    h1 {
      font-size: 14px;

      @media ${devices.tablet} {
        margin-bottom: 8px;
      }
    }

    &>div {
      display: flex;
      align-items: center;
    }

    button {
      display: flex;
      margin-left: 16px;

      @media ${devices.tablet} {
        display: none;
      }
    }
  `,
  Price: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    @media ${devices.tablet} {
      width: calc(50% + 50px);
    }

    button {
      display: none;

      @media ${devices.tablet} {
        display: flex;
      }
    }

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

    button {
      display: flex;
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

      @media ${devices.tablet} {
        display: none;
      }
    }
  `
}