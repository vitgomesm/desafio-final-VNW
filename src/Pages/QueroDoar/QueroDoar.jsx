import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import S from './queroDoar.module.scss'
import livro from '../../assets/Vector.png'

export default function QueroDoar(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: '',
        categoria: '',
        autor: '',
        imagem_url: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.cadastrarLivro(formData);
            alert('Livro cadastrado com sucesso!');
            // Limpar o formulário
            setFormData({
                titulo: '',
                categoria: '',
                autor: '',
                imagem_url: ''
            });
            // Redirecionar para a página de livros doados
            navigate('/doados');
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            alert('Erro ao cadastrar livro. Tente novamente.');
        }
    };

    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <img src={livro} alt="icone de um livro" />
                        <h3>Informações do Livro</h3>
                    </div>  
                    <input 
                        type="text" 
                        name="titulo"
                        placeholder='Titulo'
                        value={formData.titulo}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="categoria"
                        placeholder='Categoria'
                        value={formData.categoria}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="autor"
                        placeholder='Autor'
                        value={formData.autor}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="imagem_url"
                        placeholder='Link da Imagem'
                        value={formData.imagem_url}
                        onChange={handleChange}
                    />
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}