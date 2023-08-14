import Link from "next/link"

export default function Home() {
  return (
    <main >
      <h1>Estúdio Abrasel</h1>
      <p>
        <Link href='/usuarios'>Usuários</Link>
      </p>
    </main>
  )
}
