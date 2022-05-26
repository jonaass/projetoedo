import'./index.scss';

export default function index() {
    
return(

    <main className='pai'>
 <body>
    <main className='principal'/>
  
    <div className="container-esquerda">
        <img className='logo' src="./images/carro.png" alt=''/>

        <h3 className="titulo"> Estufa de Ouro </h3>
    </div>

    <div className="container-direita">

        <h3 className="area-restrita"> Área Restrita <br/> Login </h3>

        <input type="text" id="imputUsuario" placeholder="Usuário" required="required" autofocus="autofocus" className="form-control border-left-0"/>
        <p className="esqueceu"> Esqueceu seu nome de usuário? </p>

        <input type="password" id="imputSenha" placeholder="Senha" required="required" className="form-control border-left-0"/>
        <p className="esqueceu"> Esqueceu sua senha? </p>

        <a href="../menu" className="button"> Entrar </a>
         
    </div>  
    
 </body>

</main>
);
}