import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyledCartItem } from ".";
import { iCartItens, increaseCartItemQuantity, removeCartAllSameItem, removeCartItem } from "../../redux/itens/itensSlice";
import { RootState } from "../../redux/store";

export const ShopItem = () => {
  const dispatch = useDispatch();
  const cartItemList = useSelector((state: RootState) => state.itens.cartItens);
  const cartItens = useSelector((state: RootState) => state.itens.cartItens);

  const removeFromCart = (id:number):any => {
    dispatch(removeCartItem(id))
  } 
  const removeAllSameItem = (id:number):any => {
    dispatch(removeCartAllSameItem(id))
  }
  const addItemToCart = (id: number): any => {
    
    const item = cartItens.find((item: iCartItens) => item.id === id);
    if (item) {
      return dispatch(increaseCartItemQuantity(id));
    }
  };
  
  return (
    <>
    {cartItemList.map((item:iCartItens) => (
      <StyledCartItem key={item.id}>
      <div>
        <img src={item.photo} alt="relogio" />
        <AiOutlineClose onClick={() => removeAllSameItem(item.id)}/>
      </div>
      <h3>{item.name}</h3>
      <section>
        <div>
          <button onClick={() => removeFromCart(item.id)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => addItemToCart(item.id)}>+</button>
        </div>
        <span>R${item.price*item.quantity}</span>
      </section>
    </StyledCartItem>
    ))}
    </>
    
  );
};
