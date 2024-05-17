import styled from "styled-components";
import { Header } from "../components/Header";
import { CheckoutForm } from "../components/CheckoutForm";
import { PageWrapper } from "../components/PageWrapper";
import { OrderSummary } from "../components/OrderSummary";

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 55% 45%;
`;

const LeftSideWrapper = styled.div`
  padding-right: ${({ theme }) => `${theme.spacings.size3}`};
  padding-bottom: ${({ theme }) => `${theme.spacings.size1}`};
  border-right: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
`;

const RightSideWrapper = styled.div`
  padding-left: ${({ theme }) => `${theme.spacings.size3}`};
  padding-bottom: ${({ theme }) => `${theme.spacings.size1}`};
  background: ${({ theme }) => `${theme.colors.bgLightGray}`};
`;

const CheckoutWrapper = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => `${theme.colors.darkGray}`};
`;

const PinkBg = styled.div`
  width: calc(100% - 56%);
  height: 100%;
  background: ${({ theme }) => `${theme.colors.bgLightGray}`};
  position: absolute;
  top: 0;
  left: 56%;
  z-index: -1;
`;

export const Checkout = () => (
  <>
    <Header />
    <PageWrapper>
      <CheckoutWrapper>
        <Grid>
          <LeftSideWrapper>
            <CheckoutForm />
          </LeftSideWrapper>
          <RightSideWrapper>
            <OrderSummary />
          </RightSideWrapper>
        </Grid>
      </CheckoutWrapper>
      <PinkBg />
    </PageWrapper>
  </>
);
