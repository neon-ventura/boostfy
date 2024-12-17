import styles from "./Nav.module.css"

export default function Nav() {
    return(
        <>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>BoostFy</h1>
                <button className={styles.start_btn}>Começar</button>
            </nav>
        </>
    )
}