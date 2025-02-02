import { useModal } from "../ModalContext";
import CardOpen from "./Card_open/Card_open"
import Bascet from "./Bascet/Bascet";
import Zakaz from "./Zakaz/Zakaz";

const ModalsContainer = () => {
  const { modalType, modalData } = useModal();


  return (
    <>
      {modalType === "card" && <CardOpen data={modalData} />}
      {modalType === "bascet" && <Bascet data={modalData} />}
      {modalType === "zakaz" && <Zakaz data={modalData}/>}
    </>
  );
};

export default ModalsContainer;