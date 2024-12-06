import styled from "styled-components";

export const CadastrarStyle = styled.section`
  .cadastrar {
    color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  input {
    margin: 10px 0;
    padding: 10px;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    margin: 10px 0;
    padding: 10px;
    width: 250px;
    background-color: #00796b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #004d40;
  }
`;
