import styled from "styled-components";
import { Header } from "../components/Header";
import { CheckoutForm } from "../components/CheckoutForm";
import { OrderSummary } from "../components/OrderSummary";
import { device } from "../theme/Device";
import { WhyChooseSection } from "../components/orderSummaryComponents/WhyChooseSection";

const PageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(auto, 597px) minmax(auto, 443px);

  @media ${device.mobile} {
    grid-template-columns: 100%;
    background: ${({ theme }) => `${theme.colors.bgSummary}`};
  }
`;

const LeftSideWrapper = styled.div`
  padding-right: ${({ theme }) => `${theme.spacings.size3}`};
  padding-bottom: ${({ theme }) => `${theme.spacings.size1}`};
  border-right: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  @media ${device.mobile} {
    order: 2;
    padding: 0;
  }
`;

const RightSideWrapper = styled.div`
  padding-bottom: ${({ theme }) => `${theme.spacings.size1}`};
  background: ${({ theme }) => `${theme.colors.bgSummary}`};
  width: 100%;
  @media ${device.mobile} {
    order: 1;
    padding: 0;
  }
`;

const SummaryWrapper = styled.div`
  padding-left: ${({ theme }) => `${theme.spacings.size3}`};
  @media ${device.mobile} {
    padding: 0;
  }
`;

const CheckoutWrapper = styled.div`
  width: 1040px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => `${theme.colors.darkGray}`};
  margin: ${({ theme }) => `0 ${theme.spacings.lg}`};

  @media ${device.mobile} {
    margin: 0;
  }
`;

const GrayBg = styled.div`
  width: calc(100% - 60%);
  height: 100%;
  background: ${({ theme }) => `${theme.colors.bgSummary}`};
  position: absolute;
  top: 0;
  left: 60%;
  z-index: -1;

  @media ${device.mobile} {
    display: none;
  }
`;

const WhyChooseWrapper = styled.div`
  display: none;
  @media ${device.mobile} {
    display: block;
    order: 3;
    padding: ${({ theme }) => `${theme.spacings.lg}`};
    padding-top: 0;
  }
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
            <SummaryWrapper>
              <OrderSummary />
            </SummaryWrapper>
          </RightSideWrapper>
          <WhyChooseWrapper>
            <WhyChooseSection />
          </WhyChooseWrapper>
        </Grid>
      </CheckoutWrapper>
      <GrayBg />
    </PageWrapper>
  </>
);
