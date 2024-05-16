import styled from "styled-components";
import { fontWeight, space, SpaceProps, FontWeightProps } from "styled-system";
import { device } from "../theme/Device";

export const LargeTitle = styled.p<SpaceProps>`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.lgTitle};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  margin: 0;
  font-weight: 700;
  ${space}
`;

export const MediumTitle = styled.p<SpaceProps>`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  margin: 0;
  font-weight: 700;
  ${space}
`;

export const XsBody = styled.p<SpaceProps>`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.xsBody};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  margin: 0;
  font-weight: 400;
  ${space}
`;

export const XsBodyDark = styled.p<SpaceProps>`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.xsBody};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  margin: 0;
  font-weight: 700;
  ${space}
`;

export const SmBody = styled.p<
  { isLight?: boolean } & SpaceProps & FontWeightProps
>`
  color: ${({ isLight = false, theme }) =>
    isLight ? theme.colors.lightGray : theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.smBody};
  line-height: ${({ theme }) => theme.lineHeights.md};
  margin: 0;
  font-weight: 400;
  ${fontWeight}
  ${space}
`;
