import { ToastContainer } from "react-toastify"
import { Navbar } from "../Navbar"
import { TemplateProps } from "./types"

import S from "./styles"

export function Template({ children }: TemplateProps) {
  return (
    <S.Container>
      <Navbar />
      <main>{children}</main>
      <ToastContainer autoClose={3000} theme={'dark'} />
    </S.Container>
  )
}