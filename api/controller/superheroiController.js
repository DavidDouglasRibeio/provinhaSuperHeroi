import { ConsultarTodosHerois, InserirHeroi } from '../repository/superheroiRepository.js'
import { Router } from 'express'
const server = Router();

/////////////////////////////////////////////////////////////////////////////
    // Inserir Heróis //

server.post('/superheroi', async(req, resp) => {
    try{
        const { hero } = req.body;
        const retornar = await InserirHeroi(hero);
    
        if(!hero.nome)
            throw new Error('Campo nome é obrigatório')
        if(!hero.super_poder)
            throw new Error('Campo super poder é obrigatório')
        if(!hero.voa)
            throw new Error('Campo voa é obrigatório')
    
        resp.status(200).send(retornar);
    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

/////////////////////////////////////////////////////////////////////////////
    // Consultar Heróis //

server.get('/superheroi', async(req, resp) => {
    try{
        const resposta = await ConsultarTodosHerois();
            resp.status(200).send(resposta);
        }
    catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
})

export default server;