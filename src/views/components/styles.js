import { css } from "@emotion/core";

export const header = {
  container: css`
    width: 100%;
  `,
  button: css`
    width: 20%;
    min-width: 60px;
    max-width: 200px;
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
