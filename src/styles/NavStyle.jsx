import styled from 'styled-components';

export const NavStyle = styled.section`
    height: 10vh; /* 10% da altura da página */
    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(90deg, #4caf50, #81c784); /* Gradiente no fundo */
        padding: 10px 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .nav_link {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 8px;
        background: linear-gradient(90deg, #1de9b6, #1dc4e9); /* Gradiente nos botões */
        color: #000000; /* Texto preto */
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .nav_link a {
        text-decoration: none;
        color: inherit;
    }

    .nav_link:hover {
        transform: scale(1.1); /* Aumenta o botão */
        background: linear-gradient(90deg, #81d4fa, #29b6f6); /* Nova cor no hover */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Efeito de sombra */
    }

    @media (max-width: 768px) {
        nav {
            flex-direction: column;
        }

        .nav_link {
            margin: 10px 0;
        }
    }
`;
