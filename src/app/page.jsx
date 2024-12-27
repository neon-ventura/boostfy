import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.content}>
        <div className={styles.text_section}>
          <h3 className={styles.welcome_title}>Seja Bem-Vindo(a)!</h3>
          <h1 className={styles.logo}>BoostFy</h1>
          <Image className={styles.img} src={'/Lottie2.gif'} height={300} width={300} alt="Animation Gif" />
          <p className={styles.paragraph}>Impulsione seu negócio com a BoostFy. Comece agora!</p>
          <Link href={'/form'}><button className={styles.start_btn}>Começar</button></Link>
        </div>
        <div className={styles.img_pc}>
          <Image priority src={'/Lottie2.gif'} height={600} width={600} alt="Animation Gif" />
        </div>
      </div>
    </>
  );
}
