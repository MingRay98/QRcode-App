import { css } from "@emotion/core";

export const scanner = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  video: css`
    object-fit: cover;
    max-width: 500px;
    max-height: 400px;
  `,
  videoShadow: css`
    position: absolute;
    max-width: 500px;
    max-height: 400px;
    box-shadow: inset 0px 0px 0px 5em rgba(79, 92, 78, 0.5);
  `
};

export const qrcodeResult = {
  container: css`
    font-size: 18px;
    width: 100%;
    text-align: center;
    padding: 5% 0;
  `,
  link: css`
    &:visited {
      color: lightgreen;
    }
    &:link {
      color: lightgreen;
    }
  `
};
