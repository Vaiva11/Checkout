import styled from "styled-components";

export const StyledInput = styled.div`
  padding-top: ${({ theme }) => `${theme.spacings.lg}`};
  position: relative;
  width: 100%;

  & .MuiTextField-root {
    width: 100%;
  }

  label {
    font-size: 14px;
    left: 4px;
  }

  .MuiFilledInput-root {
    border: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
    border-radius: 4px;
    background-color: ${({ theme }) => `${theme.colors.white}`};
    font-size: ${({ theme }) => `${theme.fontSizes.smBody}`};
    color: ${({ theme }) => `${theme.colors.darkGray}`};
    line-height: 20px;
    border-radius: 6px;

    input {
      padding: ${({ theme }) => `${theme.spacings.lg}`};
    }

    &::before,
    &::after {
      border-bottom: none !important;
    }

    &:hover {
      background-color: ${({ theme }) => `${theme.colors.white}`};
    }

    &.Mui-focused {
      background-color: ${({ theme }) => `${theme.colors.white}`};
      input {
        padding-bottom: 8px !important;
        height: 28px;
      }
      svg {
        transition: transform 0.3s ease;
        transform: rotate(180deg);
      }
    }
    &.typed input {
      padding-bottom: 8px;
    }
  }

  .MuiInputLabel-root {
    color: ${({ theme }) => `${theme.colors.lightGray}`} !important;
    &.Mui-focused {
      font-size: 12px;
    }

    &.MuiInputLabel-shrink {
      font-size: 12px !important;
    }
  }
`;
