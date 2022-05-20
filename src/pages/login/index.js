import'./index.scss';

export default function index() {
    
return(

    <main className='pai'>
<body>
    <main className='principal'/>
        <section className='f1'>
           <div className='image-container'>
               <img src='./images/logo.png'/>
           </div>
           <div className='text1'>
               <h5> Estufa de Ouro </h5>
           </div>
        </section>

        <section className='f2'>
            <div className='text2'>
                <h5> Área Restrita  Login</h5>

            </div>

            <div className='login'>
                <label for="uname"><b></b></label>
                <input type="text" placeholder="Usuário" class="icon1" name="uname" value placeholder2="Search" required>
                </input>
            </div>

            <div class="text4">
                <span className='psw'> <a href="#"> Esqueceu seu nome de usuário?</a> </span> 
            </div>

            <div className='password'>
                <label for="psw"><b></b></label>
                <input type="text" placeholder="Senha" class="'icon2" name="psw" value placeholder2="Search" required>
                </input>
                
            </div>    

            <div className='text3'>
                <span className='psw'> <a href="#"> Esqueceu sua senha?</a> </span> 
            </div>
              
            <div>
               <a href="../menu"> <button type="submit" class="button">Entrar</button> </a>
            </div>

              
        </section>

    
</body>

</main>
);
}
