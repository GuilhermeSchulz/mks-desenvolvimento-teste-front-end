import { GlobalStyles, StyledContainer } from "./styles";
import { StyledFooter } from "./components/footer";
import { RenderMain } from "./components/main/main";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import RenderHeader from "./components/header/index";
import { CartModal } from "./components/modal/modal";

function App() {
  const { modal } = useSelector((state: RootState) => state);

  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <RenderHeader />
        <RenderMain />
        <StyledFooter>
          <p>MKS Sistemas © Todos os direitos reservados</p>
        </StyledFooter>
        {modal.isOpen && <CartModal />}
      </StyledContainer>
    </>
  );
}

export default App;
