import styled from "styled-components";
import { SmBody } from "../Typography";
import { BulletPoint } from "../../images/BulletPoint";
import { Visa } from "../../images/paymentMehtods/Visa";
import { Mastercard } from "../../images/paymentMehtods/Mastercard";
import { Amex } from "../../images/paymentMehtods/Amex";
import { DinersClub } from "../../images/paymentMehtods/DinersClub";

const PaymentMethodsWrapper = styled.div`
  background: ${({ theme }) => `${theme.colors.bgActive}`};
  border: solid 1px ${({ theme }) => `${theme.colors.borderActive}`};
  border-radius: 6px 6px 0 0;
  padding: ${({ theme }) => `${theme.spacings.lg}`};
  margin-top: ${({ theme }) => `${theme.spacings.lg}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BulletPointWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.spacings.lg}`};
`;

const PaymentCards = styled.div`
  display: flex;
  gap: 3px;
`;

const PaymentCardWrapper = styled.div`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid ${({ theme }) => `${theme.colors.borderDivider}`};
  border-radius: 3px;
`;

export const PaymentMethods = () => (
  <PaymentMethodsWrapper>
    <BulletPointWrapper>
      <BulletPoint />
      <SmBody>Credit Card</SmBody>
    </BulletPointWrapper>
    <PaymentCards>
      <PaymentCardWrapper>
        <Visa />
      </PaymentCardWrapper>
      <PaymentCardWrapper>
        <Mastercard />
      </PaymentCardWrapper>
      <PaymentCardWrapper>
        <Amex />
      </PaymentCardWrapper>
      <PaymentCardWrapper>
        <DinersClub />
      </PaymentCardWrapper>
      <PaymentCardWrapper>
        <SmBody fontWeight={500}>+4</SmBody>
      </PaymentCardWrapper>
    </PaymentCards>
  </PaymentMethodsWrapper>
);
