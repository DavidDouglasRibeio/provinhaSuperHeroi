import { Link } from "react-router-dom"
import '../../commom/commom.scss'


export default function Index() {
    return(
        <main>
            <h1> Bem-Vindo  </h1>
            <p> Nesse site você poderá cadastrar e consultar seus heróis favoritos </p>

            <Link className='navegar' to="/cadastrar"> Ir cadastrar </Link>
        </main>
    )
}