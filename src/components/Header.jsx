import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <Image
              width={150}
              height={150}
              src="/ravenxd.png"
              alt="imagen logo"
              className="logo"
            />
          </Link>
          <nav className={styles.navegacion}>
            <Link href="/">inicio</Link>
            <Link href="/yo">yo</Link>
            <Link href="/Blog">Gatos</Link>
            <Link href="/tienda">tienda</Link>
            <Link href="/Perros">Perros</Link>
            <Link href="/Pokemon">Pokemon</Link>
            <Link href="/Sorpresa">Sorpresa</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
