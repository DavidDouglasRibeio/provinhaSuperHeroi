import './index.scss'
import '../../../commom/index.scss'
import { useEffect } from 'react'
import { ConsultarTodosHerois } from '../../api/superheroi.js/index.js'
import { Link } from 'react-router-dom';
import Home from '../home/index.js'
import Cadastrar from '../cadastrar/index.js'

export default function Index() {
    const [herois, setHerois] = useState([]);

    async function Consutar() {
        const r = await ConsultarTodosHerois();
        setHerois(r);
    }

    useEffect(()=> { Consutar(); }, [])

    return(
        <main>
            <table>
                <thead>
                    <tr>
                        <th> Nome</th>
                        <th> Super-Poder</th>
                        <th> Ele voa?</th>
                    </tr>
                </thead>
                <tbody>
                    {herois.map (i => 
                    <tr>
                        <td> {i.nome} </td>
                        <td> {i.super_poder} </td>
                        <td> {i.voa} </td>
                    </tr>
                    )}
                </tbody>
            </table>

            <div className='column'>
                <Link to={Home}> Voltar para Home</Link>
                <Link to={Cadastrar}> Ir para cadastrar </Link>
            </div>
        </main>
    )
}