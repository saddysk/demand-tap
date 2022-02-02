import Header from "./myComponents/Header";
import MainBody from "./myComponents/MainBody";
import Footer from "./myComponents/Footer";

function App() {
  const companyName = "DEMAND TAP";
  return (
    <>
      <Header heading={companyName} />
      <MainBody />
      <Footer heading={companyName} />
    </>
  );
}

export default App;
