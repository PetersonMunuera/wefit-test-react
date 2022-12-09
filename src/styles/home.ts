import styled from "styled-components"
import { devices } from "~/styles/theme"

export default {
  Container: styled.ul`
    display: grid;
    gap: 16px;

    @media ${devices.tablet} {
      grid-template-columns: 1fr 1fr;
      padding: 0;
    }

    @media ${devices.desktop} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `
}