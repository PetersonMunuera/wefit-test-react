import { CartProvider } from '~/hooks/Cart/useCart'

import { TemplateProps } from "./types"

import { ToastContainer } from "react-toastify"
import { Navbar } from "../Navbar"

import { GlobalStyle } from '~/styles/globals'
import S from "./styles"

export function Template({ children }: TemplateProps) {
  return (
    <CartProvider>
      <S.Container>
        <GlobalStyle />
        <ToastContainer autoClose={2000} position={'bottom-center'} />
        <Navbar />
        <main>{children}</main>
      </S.Container>
    </CartProvider>
  )
}