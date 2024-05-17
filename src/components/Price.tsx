import styled from "styled-components";
import { SmBody, MediumTitle } from "./Typography";
import { device } from "../theme/Device";

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

  @media ${device.mobile} {
    margin: 0;
  }
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

export const Price = () => (
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
);
