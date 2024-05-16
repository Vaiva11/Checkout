import { ReactNode } from "react";
import styled from "styled-components";

const PageWrapperStyled = styled.div<{ hasBottomBorder: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ hasBottomBorder, theme }) =>
    hasBottomBorder &&
    `border-bottom: 1px solid ${theme.colors.borderDivider};`};
`;

type PageWrapperProps = {
  children: ReactNode;
  hasBottomBorder?: boolean;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  hasBottomBorder = false,
}) => (
  <PageWrapperStyled hasBottomBorder={hasBottomBorder}>
    {children}
  </PageWrapperStyled>
);
