import './index.scss'
import '../../../commom/index.scss'
import { useState } from 'react'
import { InserirHerois } from '../../api/superheroi.js/index.js'
import { Link } from 'react-router-dom';
import Home from '../home/index.js'
import Consultar from '../consultar/index.js'

export default function Index() {
    const [nome, setNome] = useState('');
    const [super_poder, setSuper_poder] = useState('');
    const [voa, setVoa] = useState(false);

    async function clickar() {
        try {
            await InserirHerois(nome, super_poder, voa)
            alert('Seu Heroizinho foi cadastrado!!')
        }
        catch(err) {
            alert(err.response.data.err);
        }
    }

    return(
        <main>
            <h1> Cadastre seu Super-Herói!</h1>
            <div className='column'>
                <div className='row'>
                    <label> Nome:</label>
                    <input type='text' placeholder='Informe o nome'  value={nome} onChange={e => setNome(e.target.value)}/> 
                </div>
                
                <div className='row'> 
                    <label> Super-Poder:</label>
                    <input type='text' placeholder='Informe o poder'  value={super_poder} onChange={e => setSuper_poder(e.target.value)}/> 
                </div>
                
                <div className='row'>
                    <label> Ele voa? </label>
                    <input type='checkbox' checked={voa} onChange={e => setVoa(e.target.checked)}/> 
                </div>

                <div>
                    <button onClick={clickar}> Cadastrar </button>
                </div>
            </div>

            <div className='column'>
                <Link to={Home}> Voltar para Home</Link>
                <Link to={Consultar}> Ir para consultar </Link>
            </div>
        </main>
    )
}