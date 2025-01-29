import Card_open from './Components/Card_open/Card_open';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main';
import { ModalProvider } from './ModalContext';

function App() {
  return (
      <ModalProvider>
        <div className="App"></div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <Card_open></Card_open>
      </ModalProvider>
  );
}

export default App;
