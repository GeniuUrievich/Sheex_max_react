import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (data) => {
        setModalData(data)
        setModalOpen(true);
    };

    const [modalData, setModalData] = useState();

    const closeModal = () => setModalOpen(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalData }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal должен использоваться внутри ModalProvider");
    }
    return context;
};