import { GlobalStyles, StyledContainer } from "./styles";
import { StyledHeader } from "./components/header/";
import logo from "./assets/logo.png";
import { AiOutlineShoppingCart,AiFillCloseCircle  } from "react-icons/ai";
import { StyledFooter } from "./components/footer";
import { RenderMain } from "./components/main/main";
import { StyledModal } from "./components/modal";
import { ShopItem } from "./components/shopItem/shopItem";
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from './redux/modal/reducer';
import { RootState } from './redux/store';
import { AppDispatch } from "./redux/store";


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItens = useSelector((state: RootState) => state.itens.cartItens);
  const { modal } = useSelector((state: RootState) => state);
  const handleOpenModal = () => {
    dispatch(openModal());
  }
  
  const handleCloseModal = () => {
    dispatch(closeModal());
  }
  const allCartItens = cartItens.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <StyledContainer>
      <GlobalStyles />
      <StyledHeader>
        <img src={logo} alt="Logo MKS Sistemas" />
        <button onClick={handleOpenModal}>
          <AiOutlineShoppingCart />
          <h3>{allCartItens}</h3>
        </button>
      </StyledHeader>
      <RenderMain />
      <StyledFooter>
        <p>MKS Sistemas © Todos os direitos reservados</p>
      </StyledFooter>
      {modal.isOpen && (
                <StyledModal>
                    <div>
                        <h3>Carrinho de Compras</h3>
                        <AiFillCloseCircle onClick={handleCloseModal} />
                    </div>
                    <ul>
                      <ShopItem/>
                    </ul>
                    <div>
                        <p>Total:</p>
                        <p>R${cartItens.reduce((acc, act) => acc + (Number(act.price)*act.quantity), 0)}</p>
                    </div>
                    <button>Finalizar Compra</button>
                </StyledModal>
            )}
    </StyledContainer>
  );
}


export default App;
