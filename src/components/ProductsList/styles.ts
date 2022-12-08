import styled from "styled-components"
import { devices } from "~/styles/theme"

export default {
  Container: styled.ul`
    display: grid;
    gap: 16px;

    list-style: none;
    padding: 0 16px 16px;

    @media ${devices.desktop} {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0;
      margin-top: 24px;
    }
  `
}