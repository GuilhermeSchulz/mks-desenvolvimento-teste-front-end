import { StyledModal } from ".";
import { AiFillCloseCircle } from "react-icons/ai";
import { ShopItem } from "../shopItem/shopItem";
export const CartModal = () => {
  return (
    <StyledModal>
      <div>
        <h3>Carrinho de Compras</h3>
        <AiFillCloseCircle />
      </div>
      <ul>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ul>
      <div>
        <p>Total:</p>
        <p>R$777</p>
      </div>
      <button>Finalizar Compra</button>
    </StyledModal>
  );
};
