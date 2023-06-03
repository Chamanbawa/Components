import logo from "./logo.svg";
import "./App.css";
import "./style/index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const imgLinks = ["https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80","https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=752&q=80","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80","https://images.unsplash.com/photo-1590246578723-cda485c7ae72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"];

function App() {
  return (
    <>
      <main>
      <Header title="CarNation" />
      <div className="section">

        <Banner
          heading="Be Faster"
          p1="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          p2="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          p3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
          />
        <div className="gallery container">
          <Gallery link = {imgLinks}/>
         
        </div>
          </div>
        <Footer/>
      </main>
    </>
  );
}

export default App;
