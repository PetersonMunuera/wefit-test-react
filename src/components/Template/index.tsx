import { Navbar } from "../Navbar"
import { TemplateProps } from "./types"

export function Template({ children }: TemplateProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}