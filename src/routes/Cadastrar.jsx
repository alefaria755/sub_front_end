import { CadastrarStyle } from "../styles/CadastrarStyle";
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const Cadastrar = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate(); 

  const handleCadastro = () => {
    if (usuario && senha) {
    
      const secretKey = "segredo123"; 

  
      const encryptedUsuario = CryptoJS.AES.encrypt(usuario, secretKey).toString();
      const encryptedSenha = CryptoJS.AES.encrypt(senha, secretKey).toString();

     
      sessionStorage.setItem("usuario", encryptedUsuario);
      sessionStorage.setItem("senha", encryptedSenha);

      alert("Cadastro realizado com sucesso!");

      
      navigate("/login"); 
    } else {
      setErro("Preencha todos os campos.");
    }
  };

  return (
    <CadastrarStyle>
      <div className="cadastrar">
        <h1>Cadastro</h1>
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
    </CadastrarStyle>
  );
};

export default Cadastrar;
