import { StyledModal } from ".";
import { AiFillCloseCircle } from "react-icons/ai";
import { ShopItem } from "../shopItem/shopItem";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/reducer";

export const CartModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItens = useSelector((state: RootState) => state.itens.cartItens);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <StyledModal>
      <div>
        <h3>Carrinho de Compras</h3>
        <AiFillCloseCircle onClick={handleCloseModal} />
      </div>
      <ul>
        <ShopItem />
      </ul>
      <div>
        <p>Total:</p>
        <p>
          R$
          {cartItens.reduce(
            (acc, act) => acc + Number(act.price) * act.quantity,
            0
          )}
        </p>
      </div>
      <button>Finalizar Compra</button>
    </StyledModal>
  );
};
