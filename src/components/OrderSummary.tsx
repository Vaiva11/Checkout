import { useState, useEffect } from "react";
import styled from "styled-components";
import { SmBody } from "../components/Typography";
import { WhyChooseSection } from "./orderSummaryComponents/WhyChooseSection";
import { device } from "../theme/Device";
import { ArrowDown } from "../images/ArrowDown";
import { Price } from "./orderSummaryComponents/Price";

const PageWrapperStyled = styled.div<{ isOverviewOpen: boolean }>`
  width: 100%;
  @media ${device.mobile} {
    ${({ isOverviewOpen, theme }) =>
      isOverviewOpen &&
      `
        border-bottom: solid 1px ${theme.colors.borderDivider}};
        margin-bottom: ${theme.spacings.lg}};
    `};
  }
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
  @media ${device.mobile} {
    display: none;
  }
`;

const OverviewButton = styled.div<{ isOverviewOpen: boolean }>`
  @media ${device.mobile} {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => `${theme.spacings.md}`};
    svg {
      transition: transform 0.3s ease;
      transform: ${({ isOverviewOpen }) => isOverviewOpen && `rotate(180deg)`};
    }
  }
`;

export const OrderSummary = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageWrapperStyled isOverviewOpen={isOverviewOpen}>
      {isMobile && (
        <Row>
          <OverviewButton
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
            isOverviewOpen={isOverviewOpen}
          >
            <SmBody>Order overview</SmBody>
            <ArrowDown />
          </OverviewButton>
          <SmBody fontWeight={500}>$299.97</SmBody>
        </Row>
      )}
      {!isMobile ? <Price /> : isOverviewOpen && <Price />}
      <WhyChooseWrapper>
        <WhyChooseSection />
      </WhyChooseWrapper>
    </PageWrapperStyled>
  );
};
