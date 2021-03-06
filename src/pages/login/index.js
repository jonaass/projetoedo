import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import'./index.scss';

export default function Index() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();

    async function entraClick() {
        try{
         const r = await axios.post('http://localhost:5000/usuario/login', {
            nome: nome,
            senha: senha
            });
           
                 navigate('/menu');
        
        }
        catch (err){
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }
    
return(

    <main className='  sombra'>

        <section className='principal'>

            <section className='sec'>
    
                <div className="container-esquerda">
                    <img className='logo' src="./images/carro.png" alt=''/>

                    <h3 className="titulo"> Estufa de Ouro </h3>
                </div>


                <div className="container-direita">

                    <h3 className="area-restrita"> Área Restrita <br/> Login </h3>

                    <input type="text" id="imputUsuario" placeholder="Usuário" required="required" autofocus="autofocus" className="input" value={nome} onChange={e => setNome(e.target.value) }/>

                    <p className="esqueceu"> Esqueceu seu nome de usuário? </p>

                    <input type="password" id="imputSenha" placeholder="Senha" required="required" className="input" value={senha} onChange={e => setSenha(e.target.value) }/>

                    <p className="esqueceu"> Esqueceu sua senha? </p>

                    
                        <a href="../menu" className="button" onClick={entraClick}> 
                            <button className='botao'>
                                Entrar 
                            </button>            
                        </a>
                    
                    
                </div>  

            </section>

        </section>

    </main>
);
}