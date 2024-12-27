import styles from "./Nav.module.css"
import Link from "next/link"

export default function Nav() {
    return (
        <>
            <nav className={styles.nav}>
                <Link href={'/'}>
                    <h1 className={styles.logo}>BoostFy</h1>
                </Link>
            </nav>
        </>
    )
}