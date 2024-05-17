import styled from "styled-components";
import { fontWeight, space, SpaceProps, FontWeightProps } from "styled-system";

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

type BodyVariant = "lightGray" | "mediumGray" | "darkGray";

export const XsBody = styled.p<
  { variant?: BodyVariant } & SpaceProps & FontWeightProps
>`
  color: ${({ variant = "darkGray", theme }) => theme.colors[variant]};
  font-size: ${({ theme }) => theme.fontSizes.xsBody};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  margin: 0;
  font-weight: 400;
  ${fontWeight}
  ${space}
`;

export const SmBody = styled.p<
  { variant?: BodyVariant } & SpaceProps & FontWeightProps
>`
  color: ${({ variant = "darkGray", theme }) => theme.colors[variant]};
  font-size: ${({ theme }) => theme.fontSizes.smBody};
  line-height: ${({ theme }) => theme.lineHeights.md};
  margin: 0;
  font-weight: 400;
  ${fontWeight}
  ${space}
`;
