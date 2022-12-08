import Link from "next/link"
import { Container } from "./style"

export function Navbar() {
  return (
    <Container>
      <Link href='/'>
        <span>WeMovies</span>
      </Link>

      <Link href='/cart'>
        <button>
          0 itens
        </button>
      </Link>
    </Container>
  )
}