import { useState } from "react";
import styled from "styled-components";
import { SmBody } from "../components/Typography";
import { WhyChooseSection } from "./orderSummaryComponents/WhyChooseSection";
import { device } from "../theme/Device";
import { ArrowDown } from "../images/ArrowDown";
import { Price } from "./orderSummaryComponents/Price";
import useIsMobile from "../hooks/useIsMobile";

const PageWrapperStyled = styled.div<{ isoverviewopen: boolean }>`
  width: 100%;
  @media ${device.mobile} {
    ${({ isoverviewopen, theme }) =>
      isoverviewopen &&
      `
        margin-bottom: ${theme.spacings.lg};
    `};
  }
`;

const Row = styled.div<{ hasbottomborder?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacings.lg} 0`};

  ${({ hasbottomborder = false, theme }) =>
    `${
      hasbottomborder &&
      `border-bottom: solid 1px ${theme.colors.borderDivider}`
    }`};

  @media ${device.mobile} {
    margin: ${({ theme }) => `0 ${theme.spacings.lg}`};
  }
`;

const WhyChooseWrapper = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

const OverviewButton = styled.div<{ isoverviewopen: boolean }>`
  @media ${device.mobile} {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => `${theme.spacings.sm}`};
    svg {
      transition: transform 0.3s ease;
      transform: ${({ isoverviewopen }) => isoverviewopen && `rotate(180deg)`};
    }
  }
`;

export const OrderSummary = () => {
  const isMobile = useIsMobile();
  const [isOverviewOpen, setIsoverviewopen] = useState(true);

  return (
    <PageWrapperStyled isoverviewopen={isOverviewOpen}>
      {isMobile && (
        <Row hasbottomborder={isOverviewOpen}>
          <OverviewButton
            onClick={() => setIsoverviewopen(!isOverviewOpen)}
            isoverviewopen={isOverviewOpen}
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
