import styled from "styled-components"
import Image from "next/image"
import { devices } from "~/styles/theme"

export default {
  Container: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 84px);

    @media ${devices.desktop} {
      height: calc(100vh - 114px);
    }
  `,

  SpinnerIcon: styled(Image)`
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `
}