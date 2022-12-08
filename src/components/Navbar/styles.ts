import styled from "styled-components"
import { colors, devices } from "~/styles/theme"

export default {
  Container: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: ${colors.light};
    padding: 0 10px;
    height: 68px;

    strong {
      font-size: 20px;
    }

    @media ${devices.desktop} {
      height: 74px;
      margin-bottom: 24px;
    }
  `,

  CartButton: styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;

    div {
      text-align: right;
      font-weight: 600;
      margin-right: 10px;
      
      span:nth-child(1) {
        display: none;
        color: ${colors.light};
        font-size: 14px;
        line-height: 19px;

        @media ${devices.desktop} {
          display: block;
        }
      }
      
      span:nth-child(2) {
        color: ${colors.textLight};
        font-size: 12px;
        line-height: 16px;
      }
    }
  `,
}