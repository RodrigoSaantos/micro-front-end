import styled, { css } from 'styled-components';

type SeparatorProps = {
  spacing?: string;
};

export const Nav = styled.nav<SeparatorProps>`
  & > ol {
    margin: 0;
    padding: 0;
  }
`;

export const Li = styled.li<SeparatorProps>`
  display: inline-flex;
  align-items: center;

  > a {
    cursor: pointer;
    text-decoration: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.005em;
    color: #888888;
    text-transform: capitalize;
    transition: color .2s ease;
    
    &:hover {
      text-decoration: underline;
      color: #444;
    }
  }
`;

export const Span = styled.span<SeparatorProps>`
  ${({ theme }) => css`
    outline: 2px solid transparent;
    outline-offset: 2px;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.005em;
    color: #111;
    text-transform: capitalize;

    &:hover {
      text-decoration: none;
    }
  `}
`;

export const A = styled.a<SeparatorProps>`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.005em;
    color: #666;
    text-transform: capitalize;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const Separator = styled.span<SeparatorProps>`
  ${({ spacing, theme }) => css`
    margin-inline: ${spacing};
    justify-content: center;
    align-items: center;
    display: flex;

    svg {
      color: #666;
    }
  `}
`;
