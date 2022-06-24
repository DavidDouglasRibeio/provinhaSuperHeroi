import './index.scss'
import '../../../commom/index.scss'
import { Link } from 'react-router-dom'
import Cadastrar from '../cadastrar/index.js'
import Consultar from '../consultar/index.js'


export default function Index() {
    return(
        <main>
            <h1> Bem vindo </h1>
            <p> Aqui você pode cadastrar e consultar seus Super Heróis favoritos!!!</p>
            <Link to={Cadastrar}> Cadastrar </Link>
            <Link to={Consultar}> Consultar  </Link>
        </main>

    )
}