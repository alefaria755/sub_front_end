import { SobreStyle } from '../styles/SobreStyle'
import React, { useState } from 'react'
import quiz from "../imgs/quiz.png"

const Sobre = () => {
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const questions = [
    {
      question: "Qual é a principal fonte de energia renovável?",
      options: ["Solar", "Nuclear", "Carvão", "Gás Natural"],
      answer: "Solar"
    },
    {
      question: "Qual país é líder mundial em energia eólica?",
      options: ["Brasil", "Alemanha", "China", "Estados Unidos"],
      answer: "China"
    },
    {
      question: "Qual dessas opções não é uma forma de energia renovável?",
      options: ["Hidrelétrica", "Solar", "Carvão", "Eólica"],
      answer: "Carvão"
    }
  ]

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].answer) {
      setScore(score + 1)
    }
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <SobreStyle>
      <div className="sobre">
        <div className="imagem">
                    <img src={quiz} alt="Quiz" />
        </div>

        <h1>Transformando o Futuro com Energia Limpa</h1>
        <p>
          Nosso compromisso com um futuro mais sustentável começa com a energia limpa. Através de fontes renováveis como solar, eólica e hidrelétrica, estamos trabalhando para um mundo onde a energia seja abundante, acessível e livre de impactos ambientais. Este projeto visa não só educar, mas também inspirar mudanças reais em como usamos e gerenciamos nossa energia. Junte-se a nós nesta jornada em direção a um futuro mais verde e próspero!
        </p>
        <p>
          Com o poder da tecnologia e a conscientização global, acreditamos que a transição para fontes de energia limpa pode ser mais rápida e eficiente do que nunca. Vamos juntos construir um mundo onde cada raio de sol, cada brisa e cada gota d'água contribua para um amanhã mais sustentável!
        </p>

        <div className="quiz">
          <h2>Teste seus conhecimentos sobre energia limpa!</h2>
          {questionIndex < questions.length ? (
            <div>
              <p>{questions[questionIndex].question}</p>
              {questions[questionIndex].options.map((option, index) => (
                <button key={index} onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div>
              <p>Você acertou {score} de {questions.length} perguntas!</p>
              <button onClick={() => { setScore(0); setQuestionIndex(0) }}>Reiniciar Quiz</button>
            </div>
          )}
        </div>
      </div>
    </SobreStyle>
  )
}

export default Sobre
