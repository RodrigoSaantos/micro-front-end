import styled, { css } from "styled-components";
import NextLink, { LinkProps as LinkPropsNext } from "next/link";

export const Container = styled.div`
  position: sticky;
  top: 121px;
  height: calc(100vh - 121px);
  width: 284px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;

  > nav {
    height: calc(100vh - 200px);
    scrollbar-gutter: stable;
    padding-bottom: 1rem;
    padding-right: 0.5rem;
    /* overflow-y: scroll; */
    flex-direction: column;
    display: flex;

    > ul {
      list-style: none;
      margin: 0;
      padding: 0;

      > li {
        margin-top: 0.375rem;
        margin-bottom: 0.375rem;
        margin-left: 3px;

        > h3 {
          color: #333;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 1.25rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          margin-bottom: 4px;
          margin: 0;
        }

        > div {
          height: auto;
          opacity: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;

          > ul {
            padding-left: 0.125rem;
            padding-right: 0.125rem;
            margin-bottom: 0 !important;
            list-style: none;
            margin: 0;
            padding: 0;

            > li {
              margin-top: 0.375rem;
              margin-bottom: 0.375rem;

              > a {
                color: #666;
                font-size: 0.875rem;
                line-height: 1.25rem;
                text-align: left;
                padding-left: 0.5rem;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                border-radius: 0.375rem;

                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                width: 100%;
                display: flex;

                &:hover {
                  color: #111;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Link = styled(NextLink)`
  ${({}) => css`
    color: "#666";
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: left;
    padding-left: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 0.375rem;

    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
    display: flex;

    &:hover {
      color: #111;
    }

    &[data-isactive="true"] {
      color: #0074de;
      
      &:hover {
        color: #68b5fb;
      }
    }
  `}
`;
