import stl from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <section className={stl.hero}>
        <h1 className={stl.hero__title}>Yuri Movchan</h1>
        <h2 className={stl.hero__vocation}>FullStack Developer</h2>
      </section>
    </header>
  );
}
