import logo from "./logo.svg";
import "./App.css";
import "./style/index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Header title="Tickets" />
      <main>
        <Banner
          heading="Be Creative"
          p1="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          p2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          p3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable."
        />
      </main>
    </>
  );
}

export default App;
