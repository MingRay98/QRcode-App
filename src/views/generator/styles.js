import { css } from "@emotion/core";

export const generator = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: inherit;
    width: 100%;
  `,
  message: css`
    margin-bottom: 1%;
  `,
  image: css`
    background-color: rgba(240, 240, 240, 0.9);
  `,
  inputContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
  `,
  textArea: css`
    margin-top: 3%;
    width: 50%;
  `,
  buttonContainer: css`
    display: flex;
    justify-content: center;
    margin-bottom: 3%;
  `,
  button: css`
    margin: 3%;
    padding: 5%;
    background-color: darkblue;
    border-radius: 50px;
    width: 15vw;
    text-align: center;
    min-width: 90px;
    max-width: 200px;
    cursor: pointer;
    &:hover {
      background-color: blueviolet;
    }
    @media (max-width: 350px) {
      font-size: 12px;
    }
  `
};
