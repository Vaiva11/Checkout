import styled from "styled-components";
import { Header } from "../components/Header";
import { CheckoutForm } from "../components/CheckoutForm";
import { PageWrapper } from "../components/PageWrapper";

const CheckoutWrapper = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
`;

const RightSection = styled.div`
  background: lightblue;
`;

export const Checkout = () => (
  <>
    <Header />
    <PageWrapper>
      <CheckoutWrapper>
        <CheckoutForm />
        <RightSection>Right</RightSection>
      </CheckoutWrapper>
    </PageWrapper>
  </>
);
