import { css } from "@emotion/core";

export const header = {
  container: css`
    width: 100%;
  `,
  button: css`
    width: fit-content;
    margin: 2% 2% 2% auto;
    text-align: center;
    padding: 1%;
    background-color: cornflowerblue;
    border-radius: 50px;
    box-shadow: 0px 2px 6px 2px #0a45a5;
    cursor: pointer;
    @media (max-width: 350px) {
      font-size: 12px;
    }
    &:hover {
      background-color: blueviolet;
      box-shadow: none;
    }
  `,
  title: css`
    float: none;
    text-align: center;
    font-size: 40px;
    color: white;
    padding: 1% 0;
    @media (max-width: 500px) {
      font-size: 150%;
    }
    @media (max-width: 350px) {
      font-size: 120%;
    }
  `,
  transformUppercase: css`
    text-transform: capitalize;
  `
};

export const notification = {
  container: css`
    position: fixed;
    text-align: center;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 150%;
    z-index: 2;
    background-color: rgba(50, 50, 50, 0.7);
    word-break: none;
    @media (max-width: 350px) {
      font-size: 110%;
    }
  `
};
