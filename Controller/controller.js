const pool = require('../Model/database');

exports.insertUser = async (req, res) =>{
    const {name, nomeUsuario, email, senha} = req.body

    try{
        const result = await pool.query(
            'INSERT INTO usuarios(name, nomeUsuario, email, senha) values ($1,$2,$3,$4)', [name, nomeUsuario, email, senha]
        )
        res.status(201).json({
            message: 'Usuário Cadastrado com sucesso',
            dados: result.rows[0]
        })
    }catch(error){
        console.error(error)
        res.status(500).json({message: 'error ao cadastrar os usuarios'})
    }

}