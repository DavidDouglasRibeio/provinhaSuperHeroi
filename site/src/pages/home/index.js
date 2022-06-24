<<<<<<< HEAD
import { Link } from "react-router-dom"
import '../../commom/commom.scss'
=======
import './index.scss'
import '../../../commom/index.scss'
import { Link } from 'react-router-dom'
import Cadastrar from '../cadastrar/index.js'
import Consultar from '../consultar/index.js'
>>>>>>> 748acc9ff11af5e9c14d01b83f734954c6a70554


export default function Index() {
    return(
        <main>
<<<<<<< HEAD
            <h1> Bem-Vindo  </h1>
            <p> Nesse site você poderá cadastrar e consultar seus heróis favoritos </p>

            <Link className='navegar' to="/cadastrar"> Ir cadastrar </Link>
        </main>
=======
            <h1> Bem vindo </h1>
            <p> Aqui você pode cadastrar e consultar seus Super Heróis favoritos!!!</p>
            <Link to={Cadastrar}> Cadastrar </Link>
            <Link to={Consultar}> Consultar  </Link>
        </main>

>>>>>>> 748acc9ff11af5e9c14d01b83f734954c6a70554
    )
}