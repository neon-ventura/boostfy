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
          <h1 className={styles.logo}>ClientFlow</h1>
          <Image src={'/Lottie2.gif'} height={300} width={300} alt="Animation Gif"/>
          <p className={styles.paragraph}>Envie seus dados e documentos para iniciar o processo de integração. Vamos começar?</p>
          <button className={styles.start_btn}>Começar</button>
        </div>
      </div>
    </>
  );
}
