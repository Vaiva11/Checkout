import styled from "styled-components";
import { Logo } from "../images/Logo";
import { ShoppingBag } from "../images/ShoppingBag";
import { PageWrapper } from "./PageWrapper";

const HeaderWrapper = styled.div`
  width: 1040px;
  padding: ${({ theme }) => `${theme.spacings.lg}`} 0;
  display: flex;
  justify-content: space-between;
`;

const ShoppingBagWrapper = styled.div`
  cursor: pointer;
`;

export const Header = () => (
  <PageWrapper hasBottomBorder>
    <HeaderWrapper>
      <Logo />
      <ShoppingBagWrapper>
        <ShoppingBag />
      </ShoppingBagWrapper>
    </HeaderWrapper>
  </PageWrapper>
);
