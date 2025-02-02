import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalType, setModalType] = useState(null); 
    const [modalData, setModalData] = useState(null);

    const [bascet, setBascet] = useState([])
    const openModal = (type, data = null) => {
        setModalType(type);
        setModalData(data);
      };
    
      const closeModal = () => {
        setModalType(null);
        setModalData(null);
      };
    
      return (
        <ModalContext.Provider value={{ modalType, modalData, openModal, closeModal, bascet, setBascet }}>
          {children}
        </ModalContext.Provider>
      );
};

export const useModal = () => useContext(ModalContext)