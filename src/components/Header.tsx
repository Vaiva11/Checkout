import styled from "styled-components";
import { Logo } from "../images/Logo";
import { ShoppingBag } from "../images/ShoppingBag";
import { PageWrapper } from "./PageWrapper";
import { device } from "../theme/Device";

const HeaderWrapper = styled.div`
  width: 1040px;
  padding: ${({ theme }) => `${theme.spacings.lg}`} 0;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    padding: ${({ theme }) => `${theme.spacings.lg}`};
    svg {
      height: 24px;
      width: auto;
    }
  }
`;

const ShoppingBagWrapper = styled.div`
  cursor: pointer;
  @media ${device.mobile} {
    svg {
      height: 20px;
      width: auto;
    }
  }
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
