import styled from "styled-components";

export const Container = styled.header`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 3000;
  padding: 0 24px;
  height: 64px;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  box-shadow: inset 0 -1px 0 0 #eaeaea;
  transform: translateZ(0);
  -webkit-backdrop-filter: saturate(180%) blur(5px);
  backdrop-filter: saturate(180%) blur(5px);
  background: hsla(0, 0%, 100%, 0.8);

  > nav {
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 1400px;
    position: relative;
    flex: 1 1;

    > div:first-child {
      width: 100%;
      display: flex;
      align-items: center;
      grid-gap: 24px;
      gap: 24px;

      > a {
        text-decoration: none;
        transition: color 0.15s ease;
        font-size: 14px;
        border-radius: 2px;
        color: #666;
        position: relative;

        &:hover {
          color: #000;
        }
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      gap: 12px;
    }
  }
`;
