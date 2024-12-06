import styled from 'styled-components'

export const SobreStyle = styled.section`
  .sobre {
    color: black;
    padding: 20px;
    text-align: center;
  }

  .sobre h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: 	#008000;
  }

  .sobre p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .quiz {
    margin-top: 30px;
  }

  .quiz button {
    background-color: #00796b;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .quiz button:hover {
    background-color: #004d40;
  }
`
