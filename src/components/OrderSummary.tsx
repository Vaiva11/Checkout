import styled from "styled-components";
import {
  SmBody,
  MediumTitle,
  XsBody,
  XsBodyDark,
} from "../components/Typography";
import { CashBack } from "../images/whyChoose/CashBack";
import { Fame } from "../images/whyChoose/Fame";
import { CustomerService } from "../images/whyChoose/CustomerService";

const PageWrapperStyled = styled.div`
  width: 100%;
  background-color: ${({ theme }) => `${theme.colors.bgSummary}`};
  padding-left: ${({ theme }) => `${theme.spacings.size3}`};
  padding-bottom: ${({ theme }) => `${theme.spacings.size1}`};
`;

const ImageWrapper = styled.div`
  position: relative;
  img {
    width: 64px;
  }
`;

const ProductsNumber = styled.div`
  background-color: ${({ theme }) => `${theme.colors.mediumGray}`};
  color: white;
  font-size: ${({ theme }) => `${theme.fontSizes.xsBody}`};
  font-weight: 700;
  border-radius: 100%;
  padding: 3px 7px;
  width: fit-content;
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: default;
`;

const PriceWrapper = styled.div`
  margin-top: ${({ theme }) => `${theme.spacings.size2}`};
  margin-bottom: ${({ theme }) => `${theme.spacings.size1}`};
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div<{ hasBottomBorder?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.lg} 0`};

  ${({ hasBottomBorder = false, theme }) =>
    `${
      hasBottomBorder &&
      `border-bottom: solid 1px ${theme.colors.borderDivider}`
    }`};
`;

const WhyChooseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme.spacings.lg}`};
`;

const WhyChooseTitle = styled.div`
  p {
    display: flex;
    flex-direction: row;
  }
  p:before,
  p:after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${({ theme }) => `${theme.colors.borderDivider}`};
    margin: auto;
  }
  p:before {
    margin-right: ${({ theme }) => `${theme.spacings.lg}`};
  }
  p:after {
    margin-left: ${({ theme }) => `${theme.spacings.lg}`};
  }
`;

const Section = styled.div`
  display: flex;
  gap: 16px;
`;

export const OrderSummary = () => (
  <PageWrapperStyled>
    <PriceWrapper>
      <Row hasBottomBorder>
        <Product>
          <ImageWrapper>
            <img src="/images/product.png" alt="product" />
            <ProductsNumber>3</ProductsNumber>
          </ImageWrapper>
          <SmBody fontWeight={700} ml={3}>
            LogoIpsum IPL
          </SmBody>
        </Product>
        <SmBody fontWeight={500}>$299.97</SmBody>
      </Row>
      <Row hasBottomBorder>
        <SmBody>Subtotal</SmBody>
        <SmBody>$299.97</SmBody>
      </Row>
      <Row>
        <MediumTitle>Total</MediumTitle>
        <MediumTitle>$299.97</MediumTitle>
      </Row>
    </PriceWrapper>
    <WhyChooseWrapper>
      <WhyChooseTitle>
        <SmBody>Why Choose LogoIpsum</SmBody>
      </WhyChooseTitle>
      <Section>
        <div>
          <CashBack />
        </div>
        <div>
          <XsBodyDark mb={2}>90-Day Money Back Guarantee</XsBodyDark>
          <XsBody>
            We love our products and we're confident you will too! If you're not
            in love with your LogoIpsum product, our easy return and refund
            policy is designed to make things as easy as possible for you.
          </XsBody>
        </div>
      </Section>
      <Section>
        <div>
          <Fame />
        </div>
        <div>
          <XsBodyDark mb={2}>Over 75,000+ Happy Customer</XsBodyDark>
          <XsBody>
            Everyone that tries LogoIpsum says it’s a must-have. We invest a lot
            of love and care into making our products, so you can enjoy seeing
            results when using it.
          </XsBody>
        </div>
      </Section>
      <Section>
        <div>
          <CustomerService />
        </div>
        <div>
          <XsBodyDark mb={2}>Professional Customer Support</XsBodyDark>
          <XsBody>
            Our customer service works 24/7 for your satisfaction. Feel free to
            reach out to us anytime.
          </XsBody>
        </div>
      </Section>
    </WhyChooseWrapper>
  </PageWrapperStyled>
);
