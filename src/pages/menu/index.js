import './index.scss';

export default function Menu() {

    return(

        <main>

            <div className='primeiro'>
                <div className='seta'>
                    <a href="../landingpage" >
                        <img src="./images/66822.png" className='img-1'/> 
                    </a>
                </div>

                <h1 className='Serviço'> Qual serviço deseja?</h1>
                
                <div className='Agendar'>
                    <button className="b1">
                        <a href="../agendarpedido">Agendar Pedido</a>
                    </button>
                </div>

                <div className='Consulta'>
                    <button className="b2">
                        <a href="../consultarpedido">Consulta de Pedido</a>
                    </button>
                </div>

            </div>

    
        </main>

    );
    
}