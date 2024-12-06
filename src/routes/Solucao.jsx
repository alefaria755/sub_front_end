import { SolucaoStyle } from "../styles/SolucaoStyle";
import energia from "../imgs/energia.jpg"

const Solucao = () => {
    return (
        <SolucaoStyle>
            <div className="conteudo">
                <h2>Como a Energia Limpa Pode Mudar o Futuro</h2>
                <div className="imagem">
                    <img src={energia} alt="Energia Limpa" />
                </div>
                <p>
                    A transição para fontes de energia limpa, como solar, eólica e hidrelétrica, é fundamental para reduzir os impactos ambientais causados pelas fontes tradicionais de energia. Essas soluções sustentáveis oferecem benefícios não apenas para o meio ambiente, mas também para as comunidades, criando um futuro mais justo e acessível para todos. 
                </p>
                <p>
                    Um dos maiores desafios é aumentar a eficiência e a acessibilidade dessas tecnologias, garantindo que todas as regiões possam se beneficiar das vantagens das energias renováveis. Aqui, mostramos como iniciativas inovadoras em energia limpa estão mudando o cenário global.
                </p>

            </div>
        </SolucaoStyle>
    );
};

export default Solucao;
