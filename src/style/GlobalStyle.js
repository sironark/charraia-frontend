import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Courier New', Courier, monospace;
        
    }
    body{
        font-family: 'Courier New', Courier, monospace;
        
    }
    button {
        /*
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #9F9F9F;
        color: #FFFFFF;
        cursor: pointer;
        width: 100%;
        padding: 12px;
        font-family: Oswald;
        font-size: 27px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0em;
*/
    }
    
    input {
    font-size: 15px;
    width: calc(100% - 20px);
    border-radius: 6px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
}

input:focus {
    border: 2px solid #ffb6b6;
    margin: 0;
}

input::placeholder {
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #9F9F9F;

    @media (max-width: 767px) {
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: 0em;

  }
}

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: white;
        text-decoration: underline;
        padding-top: 30px;
    }
    .disabled{
        opacity: 0.6;
    }
`;

export default GlobalStyle;
