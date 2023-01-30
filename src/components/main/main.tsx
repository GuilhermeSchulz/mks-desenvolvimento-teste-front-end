import { StyledMain, StyledSkeleton } from "./style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  addCartItens,
  fetchAllItens,
  iCartItens,
  increaseCartItemQuantity,
} from "../../redux/itens/itensSlice";
import { FiShoppingBag } from "react-icons/fi";
export const RenderMain = () => {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootState) => state.itens.itens);
  const loading = useSelector((state: RootState) => state.itens.loading);
  const error = useSelector((state: RootState) => state.itens.error);
  const cartItens = useSelector((state: RootState) => state.itens.cartItens);

  const errorMessage = useSelector(
    (state: RootState) => state.itens.errorMessage
  );

  const addItemToCart = (id: number): any => {
    const item = cartItens.find((item: iCartItens) => item.id === id);
    if (item) {
      return dispatch(increaseCartItemQuantity(id));
    } else {
      const otherItem = itens.find((item: any) => item.id === id);
      if (otherItem) {
        const newItem = { ...otherItem, quantity: 1 };
        return dispatch(addCartItens(newItem));
      }
    }
  };

  useEffect(() => {
    dispatch(fetchAllItens());
  }, [dispatch]);

  if (loading) {
    return (
      <StyledMain>
        <ul>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
          <StyledSkeleton
            variant="rectangular"
            height={390}
            width={353}
          ></StyledSkeleton>
        </ul>
      </StyledMain>
    );
  }
  if (error) {
    return <div>{errorMessage}</div>;
  }

  return (
    <StyledMain>
      <ul>
        {itens.map((item) => {
          return (
            <li key={item.id}>
              <img src={`${item.photo}?ims=150`} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <span>R${item.price}</span>
              </div>
              <p>{item.description}</p>
              <button onClick={() => addItemToCart(item.id)}>
                <FiShoppingBag />
                Comprar
              </button>
            </li>
          );
        })}
      </ul>
    </StyledMain>
  );
};
