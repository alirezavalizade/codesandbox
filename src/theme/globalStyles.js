import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,100&display=swap');

    html, body {
        min-height: 100%;
        height: 100%;
        overflow: hidden;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
    }

    body {
        margin: 0;
        padding: 0;
        display: flex;

        #root {
            display: flex;
            flex: 1;            
        }
    }

    *, ::before, ::after {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;