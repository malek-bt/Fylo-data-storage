import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Fylo data storage component</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.fylo}>
            <div>
              <img src="/logo.svg"></img>
            </div>
            <div className={styles.icons}>
              <div className={styles.icon}>
                <img src="/icon-document.svg"></img>
              </div>
              <div className={styles.icon}>
                <img src="/icon-folder.svg"></img>
              </div>
              <div className={styles.icon}>
                <img src="/icon-upload.svg"></img>
              </div>
            </div>
          </div>

          <div className={styles.details}>
            <p className={styles.text}>
              You've used <span>815 GB </span> of your storage{" "}
            </p>

            <div>
              <div className={styles.progress_bar}>
                <div className={styles.progress}>
                  <div className={styles.circle}></div>
                </div>
              </div>
              <div className={styles.storages}>
                <p className={styles.Storage}>0 GB</p>
                <p className={styles.Storage}>1000 GB</p>
              </div>
            </div>
          </div>
          <div className={styles.centred_div}>
            <p>
              185 <sup>GB LEFT</sup>{" "}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
