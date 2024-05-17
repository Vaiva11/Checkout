import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export const StyledInput = styled.div<SpaceProps>`
  padding-top: ${({ theme }) => theme.spacings.lg};
  position: relative;
  width: 100%;

  & .MuiTextField-root {
    width: 100%;
  }

  label {
    font-size: ${({ theme }) => theme.fontSizes.smBody};
    left: ${({ theme }) => theme.spacings.xs};
    line-height: ${({ theme }) => `${theme.lineHeights.md}`};
    font-style: normal;
    font-weight: 400;
  }

  .MuiFilledInput-root {
    border: solid 1px ${({ theme }) => theme.colors.borderDivider};
    border-radius: ${({ theme }) => theme.spacings.xs};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.smBody};
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: ${({ theme }) => `${theme.lineHeights.md}`};
    border-radius: 6px;
    height: 52px !important;

    &::before,
    &::after {
      border-bottom: none !important;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    }

    &.Mui-focused {
      background-color: ${({ theme }) => theme.colors.white};
      svg {
        transition: transform 0.3s ease;
        transform: rotate(180deg);
      }
    }

    &.typed input {
      padding-bottom: ${({ theme }) => theme.spacings.sm};
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => theme.colors.lightGray} !important;

    &.Mui-focused {
      font-size: 16px;
    }

    &.MuiInputLabel-shrink {
      font-size: 16px !important;
    }
  }

  && .MuiFilledInput-input {
    padding-left: ${({ theme }) => theme.spacings.lg};
  }

  && .MuiFilledInput-input:focus {
    background: none;
  }

  input:-webkit-autofill {
    background-color: white !important;
  }

  ${space}
`;
