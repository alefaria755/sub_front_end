import styled from 'styled-components';

export const FooterStyle = styled.section`
    height: 10vh; /* Ocupa 10% da altura da página */
    background: linear-gradient(90deg, #004d40, #00796b); /* Fundo gradiente */
    display: flex;
    align-items: center;
    justify-content: center;

    .icones {
        display: flex;
        gap: 20px; /* Espaço entre os ícones */
    }

    .icones a {
        color: #ffffff; /* Cor inicial dos ícones */
        font-size: 24px; /* Tamanho dos ícones */
        transition: transform 0.3s ease, color 0.3s ease;
    }

    .icones a:hover {
        transform: scale(1.2); /* Aumenta o ícone ao passar o mouse */
        color: #80cbc4; /* Cor de destaque no hover */
    }

    @media (max-width: 768px) {
        .icones {
            gap: 15px;
        }

        .icones a {
            font-size: 20px; /* Ícones menores em telas pequenas */
        }
    }
`;
