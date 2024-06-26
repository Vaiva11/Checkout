import { ReactNode } from "react";
import styled from "styled-components";

const PageWrapperStyled = styled.div<{ hasbottomborder: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  ${({ hasbottomborder, theme }) =>
    hasbottomborder &&
    `border-bottom: 1px solid ${theme.colors.borderDivider};`};
`;

type PageWrapperProps = {
  children: ReactNode;
  hasbottomborder?: boolean;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  hasbottomborder = false,
}) => (
  <PageWrapperStyled hasbottomborder={hasbottomborder}>
    {children}
  </PageWrapperStyled>
);
