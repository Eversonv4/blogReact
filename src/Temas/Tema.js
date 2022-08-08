function Tema() {
  function Tema01() {
    return (
      <>
        <div className="bg tema01">
          <div className="bg"></div>
          <div className="buildings"></div>
          <div className="far-buildings"></div>
          <div className="skill-foreground"></div>
        </div>
      </>
    );
  }
  function Tema02() {
    return (
      <>
        <div className="bg tema02">
          <div className="foreground"></div>
          <div className="far-buildings"></div>
          <div className="back-buildings"></div>
        </div>
      </>
    );
  }
  function Tema03() {
    return (
      <>
        <div className="bg tema03">
          <div className="bg"></div>
          <div className="foreground-trees"></div>
          <div className="montain-far"></div>
          <div className="montains"></div>
          <div className="trees"></div>
        </div>
      </>
    );
  }
  // randomizar o tema
  function temaRandom(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  // passando a quantidade de temas para que seja escolhido um aleatóriamente
  let tema = temaRandom(1, 3);
  // aplicando ajuste de classNamees referente ao respectivo tema
  let setTema = document.querySelectorAll(".tema");
  setTema.forEach(function (t) {
    t.classList.add(`tema0${tema}`);
  });
  switch (tema) {
    case 1:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
      return Tema01();
    // caso seja o tema 02
    case 2:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
      return Tema02();
    // caso seja o tema 03
    case 3:
      document
        .getElementById("temaCss")
        .setAttribute("href", `./assets/css/tema0${tema}.css`);
      return Tema03();
    default:
      break;
  }
}
export default Tema;
