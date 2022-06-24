<<<<<<< HEAD
import { useState, useEffect } from "react"
import { InserirHeroi, ConsultarHerois } from "../../api/superHeroi.js"
import { Link } from "react-router-dom"
import './index.scss'
import '../../commom/commom.scss'

=======
import './index.scss'
import '../../../commom/index.scss'
import { useState } from 'react'
import { InserirHerois } from '../../api/superheroi.js/index.js'
import { Link } from 'react-router-dom';
import Home from '../home/index.js'
import Consultar from '../consultar/index.js'
>>>>>>> 748acc9ff11af5e9c14d01b83f734954c6a70554

export default function Index() {
    const [nome, setNome] = useState('');
    const [super_poder, setSuper_poder] = useState('');
    const [voa, setVoa] = useState(false);
<<<<<<< HEAD
    const [superHerois, setSuperHerois] = useState([]);
    
    async function clicar() {
        try{
            await InserirHeroi(nome, super_poder, voa)
            alert('Seu Heroizinho foi cadastrado!!')
        }
        catch(err) {
            alert(err.response.data.superHerois)
        }
    }

    async function Consultar() {
        const r = await ConsultarHerois();
        setSuperHerois(r);
    }

    useEffect(() => {Consultar(); }, [])

    return(
        <main>
            <h1> Bem-Vindo  </h1>
            <p> Realize seus cadastros! </p>


            <div>
                <h1> Área Cadastro</h1>

                <div> 
                    <label> Nome: </label>
                    <input type="text" placeholder="Informe o nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div> 
                    <label> Super-Poder: </label>
                    <input type="text" placeholder="Informe o super-poder" value={super_poder} onChange={e => setSuper_poder(e.target.value)} />
                </div>
                <div> 
                    <label> Ele voa? </label>
                    <input type="checkbox" checked={voa} onChange={e => setVoa(e.target.checked)} />
                </div>
                <div>
                    <button onClick={clicar}> Cadastrar</button>
                </div>
            </div>

            <div>
                <h1> Área Consulta </h1>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th> Nome </th>
                                <th> Super-Poder </th>
                                <th> Ele voa? </th>
                            </tr>
                        </thead>

                        <tbody>
                            {superHerois.map(i => 
                            <tr>
                                <td> {i.nome} </td>
                                <td> {i.super_poder} </td>
                                <td> {i.voa ? 'Sim' : 'Não'} </td>

                            </tr>    
                                
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link className='navegar' to="/"> Ir para home </Link>
=======

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
>>>>>>> 748acc9ff11af5e9c14d01b83f734954c6a70554
        </main>
    )
}