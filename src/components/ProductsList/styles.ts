import styled from "styled-components"
import { devices } from "~/styles/theme"

export default {
  Container: styled.ul`
    display: grid;
    gap: 16px;

    list-style: none;

    @media ${devices.desktop} {
      grid-template-columns: 1fr 1fr 1fr;
      padding: 0;
    }
  `
}