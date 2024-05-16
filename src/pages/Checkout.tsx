import styled from "styled-components";
import { Header } from "../components/Header";
import { CheckoutForm } from "../components/CheckoutForm";
import { PageWrapper } from "../components/PageWrapper";
import { OrderSummary } from "../components/OrderSummary";

const CheckoutWrapper = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => `${theme.colors.darkGray}`};
`;

export const Checkout = () => (
  <>
    <Header />
    <PageWrapper>
      <CheckoutWrapper>
        <CheckoutForm />
        <OrderSummary />
      </CheckoutWrapper>
    </PageWrapper>
  </>
);
