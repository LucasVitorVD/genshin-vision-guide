import Image from "next/image"
import Link from "next/link"
import mondstadtLogo from "../../../public/mondstadt-logo.png"

export default function Header() {
  return (
    <header className="flex items-center px-6 h-26">
      <div className="flex items-center gap-1">
        <figure>
          <Image src={mondstadtLogo} alt="genshin logo" width={50} height={50} />
        </figure>
      </div>

      <nav className="flex flex-1 justify-center gap-10">
        <Link href="#">Home</Link>
        <Link href="#">Personagens</Link>
        <Link href="#">Armas</Link>
        <Link href="#">Artefatos</Link>
        <Link href="#">Sobre</Link>
      </nav>
    </header>
  )
}