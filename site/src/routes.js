<<<<<<< HEAD
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/index.js'
import Cadastrar from './pages/cadastrar/index.js'

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/cadastrar' element={<Cadastrar/>} />
            </Routes>
        </BrowserRouter>
=======
import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/home/index.js' 
import Cadastrar from './pages/cadastrar/index.js'
import Consultar from './pages/consultar/index.js'

export default function Index() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cadastrarheroi' element={<Cadastrar/>} />
            <Route path='/consultarheroi' element={<Consultar/>} />
        </Routes>
    </BrowserRouter>
>>>>>>> 748acc9ff11af5e9c14d01b83f734954c6a70554
    )
}