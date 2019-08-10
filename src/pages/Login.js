import React, {useState} from 'react';
import './Login.css';
import logo from '../assets/logo.svg';
import api from "../services/api";

export default function Login({history}){
    const [username, setUsername] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post("/devs", { username })

        history.push(`/devs/${response.data._id}`);
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário do github" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button>Enviar</button>
            </form>
        </div>
    
    );
}
