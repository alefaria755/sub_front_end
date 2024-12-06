import { LoginStyle } from "../styles/LoginStyle";
import React, { useState } from "react";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const secretKey = "segredo123"; 


    const storedUsuario = sessionStorage.getItem("usuario");
    const storedSenha = sessionStorage.getItem("senha");

    if (storedUsuario && storedSenha) {

      const decryptedUsuario = CryptoJS.AES.decrypt(storedUsuario, secretKey).toString(CryptoJS.enc.Utf8);
      const decryptedSenha = CryptoJS.AES.decrypt(storedSenha, secretKey).toString(CryptoJS.enc.Utf8);

      if (usuario === decryptedUsuario && senha === decryptedSenha) {
        alert("Login realizado com sucesso!");
        navigate("/"); 
      } else {
        setErro("Usuário ou senha incorretos.");
      }
    } else {
      setErro("Usuário não encontrado.");
    }
  };

  return (
    <LoginStyle>
      <div className="login">
        <h1>Login</h1>
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
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </LoginStyle>
  );
};

export default Login;
