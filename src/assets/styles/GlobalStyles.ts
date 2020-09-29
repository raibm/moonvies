import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
}

:root {
    --main-color: #070712;
    --input-soft-color: rgba(0, 0, 0, 0.4);
    --input-placeholder-soft-color: rgba(0, 0, 0, 0.3);
    --input-placeholder-focus-soft-color: rgba(0, 0, 0, 0.1);
    --dark-button-color: rgba(0, 0, 0, 0.8);
    --dark-button-hover-color: rgba(0, 0, 0, 0.7);
    --moon-color: #c4c4c4;
    --hover-color: #FF9000;
  }
`;
