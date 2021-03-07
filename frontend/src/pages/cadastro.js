import React, {useState} from "react";
import { api } from '../services/api';

const Cadastrar = () => {
    const [nome, setNome] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const [foto, setFoto] = useState('');
    
    const enviaFormulario = (e) => {
        e.preventDefault();

        const http = api();
        try{
            http.post('/cadastrar', {
                nome,
                data_nascimento,
                foto,
            });

            alert('Usuário cadastrado com sucesso');
        }catch(err){
            console.log(err);
        }
       
    }
    return (
        <form onSubmit={enviaFormulario}>
        <h5>Cadastro de usuário</h5>
        <br />
        <div>
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" onChange={(e) => setNome(e.target.value)}/>
        </div>
        <br />
        <div>
            <label for="data_nascimento">Data de nascimento:</label>
            <input type="date" id="data_nascimento" name="data_nascimento" onChange={(e) => setData_nascimento(e.target.value)}/>
        </div>
        <br />
        <div>
            <label for="foto">Foto:</label>
            <input type="image" id="foto" name="foto" onChange={(e) => setFoto(e.target.value)} />    
        </div>
        <br />
        <div className="button">
        <button type="submit">Cadastrar</button>
        </div>
    </form>
    )
}

export default Cadastrar;