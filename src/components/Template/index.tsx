import { TemplateProps } from "./types"
import { GlobalStyle } from '~/styles/globals'
import { ToastContainer } from "react-toastify"
import { Navbar } from "../Navbar"

import S from "./styles"

export function Template({ children }: TemplateProps) {
  return (
    <S.Container>
      <GlobalStyle />
      <ToastContainer autoClose={3000} theme={'dark'} />      
      <Navbar />
      <main>{children}</main>
    </S.Container>
  )
}