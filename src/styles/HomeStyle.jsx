import styled from "styled-components";

export const HomeStyle = styled.section`
    /* Container que vai garantir que o Home ocupe 80% da altura da página */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh; /* Ocupa 80% da altura da página */
    align-items: center;
    text-align: center;

    #banner {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
        overflow: hidden;
    }

    #imgbanner {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    .descricao {
        padding: 20px;
        margin-top: 20px;
    }

    .descricao h2 {
        font-size: 24px;
        color: #2d6a4f;
        margin-bottom: 10px;
    }

    .descricao p {
        font-size: 18px;
        color: #4a4a4a;
    }
`;
