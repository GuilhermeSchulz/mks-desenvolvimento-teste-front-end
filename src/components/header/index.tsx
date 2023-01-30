import { StyledHeader } from "./style";
import logo from "../../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/reducer";
import { AppDispatch, RootState } from "../../redux/store.js";
import { useSelector } from "react-redux";

const RenderHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItens = useSelector((state: RootState) => state.itens.cartItens);
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const allCartItens = cartItens.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StyledHeader>
      <img src={logo} alt="Logo MKS Sistemas" />
      <button onClick={handleOpenModal}>
        <AiOutlineShoppingCart />
        <h3>{allCartItens}</h3>
      </button>
    </StyledHeader>
  );
};
export default RenderHeader;
