import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Conta.css';

function Conta(){

    const [nome,setNome] = useState();
    const [senha,setSenha] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    function handleSenha(valor){
        setError(valor.length<8)
        setSenha(valor)
    }
    function salvar(e){
        e.preventDefault()
        navigate('/')
    }

    return(
        <form className='form-conta'>
            <label htmlFor='nome'>Nome</label>
            <input 
            type='text' 
            id='nome'
            value = {nome}
            onChange={e => setNome(e.target.value)}    
            />

            <label htmlFor='senha'>senha</label>
            <input 
            type='text' 
            id='senha'
            value={senha}
            onChange={e=> handleSenha(e.target.value)}   
            />
            {error && <span>Senha muita curta 🤏</span>}

            <button disabled={error} onClick={salvar}>Salvar</button>
        </form>
    )
}

export default Conta