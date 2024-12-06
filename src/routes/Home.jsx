import { useEffect, useState } from "react";
import { HomeStyle } from "../styles/HomeStyle";
import barragem from "../imgs/barragem.png";
import painel from "../imgs/painel.png";
import turbinas from "../imgs/turbinas.png";

const Home = () => {
    const imagens = [barragem, painel, turbinas];
    const titulos = [
        "Barragem Hidrelétrica: A Força da Água",
        "Painéis Solares: Energia do Sol",
        "Turbinas Eólicas: Aproveitando o Vento"
    ];
    const textos = [
        "As barragens hidrelétricas aproveitam a força da água para gerar energia limpa e sustentável, essencial para um futuro sem poluição.",
        "Os painéis solares captam a energia do sol, uma fonte renovável que pode ser utilizada em grande escala para alimentar cidades.",
        "As turbinas eólicas convertem a energia do vento em eletricidade, reduzindo a dependência de fontes de energia não renováveis."
    ];

    const [index, setIndex] = useState(0);
    const time = 3000; // 3 segundos

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
        }, time);

        return () => clearInterval(interval);
    }, [imagens]);

    return (
        <HomeStyle>
            <section id="banner">
                <img id="imgbanner" src={imagens[index]} alt={`Slide ${index + 1}`} />
            </section>
            <div className="descricao">
                <h2>{titulos[index]}</h2>
                <p>{textos[index]}</p>
            </div>
        </HomeStyle>
    );
};

export default Home;
