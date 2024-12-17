import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.content}>
        <div className={styles.text_section}>
          <h3 className={styles.welcome_title}>Seja Bem-Vindo(a)!</h3>
          <h1 className={styles.logo}>BoostFy</h1>
          <Image src={'/Lottie2.gif'} height={300} width={300} alt="Animation Gif"/>
          <p className={styles.paragraph}>Impulsione seu negócio com a BoostFy. Comece agora!</p>
          <button className={styles.start_btn}>Começar</button>
        </div>
      </div>
    </>
  );
}
