import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.content}>
      <h2>Hi, I'm Osema.</h2>
      <h1>
        Student of Software Engineering at{" "}
        <a
          className="selected"
          href="https://enseirb-matmeca.bordeaux-inp.fr/fr"
          target="_black"
        >
          ENSEIRB-MATMECA{" "}
        </a>
        , and{" "}
        <a href="http://www.esi.dz" target="_blank" className="react">
          ESI
        </a>{" "}
        before that.
      </h1>
      <div>
        <h3>
          <span className="react">React </span>
          enthousiaste,
          <span className="next">Nextjs</span> lover.
        </h3>
        <h3>
          Passionate about efficient app development, architectural solutions
          and design patterns.
        </h3>
        <h3>
          I always enjoy a challenge.
          <div className={styles.quotes}>
            Accept the challenges so that you can feel the exhilaration of
            victory
          </div>
        </h3>
        <h3 className="mt-5">
          <Link href="/about">
            <a className="selected" href="/about">
              Learn more about me
            </a>
          </Link>
        </h3>
      </div>
    </div>
  );
}
