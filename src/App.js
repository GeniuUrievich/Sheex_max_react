import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main';
import ModalsContainer from './Components/ModalContainer';
import { ModalProvider } from './ModalContext';

function App() {
  return (
      <ModalProvider>
        <div className="App"></div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        <ModalsContainer/>
      </ModalProvider>
  );
}

export default App;
