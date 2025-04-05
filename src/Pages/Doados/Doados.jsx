import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useSearch } from '../../components/Header/header';
import S from './doados.module.scss';

export default function Doados() {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { searchTerm } = useSearch();

    const fetchLivros = async () => {
        try {
            const data = await api.listarLivros();
            setLivros(data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
            setError('Erro ao carregar os livros. Por favor, tente novamente mais tarde.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLivros();
    }, []);

    const handleRemoverLivro = async (id) => {
        if (window.confirm('Tem certeza que deseja remover este livro?')) {
            try {
                await api.removerLivro(id);
                await fetchLivros(); // Atualiza a lista
            } catch (error) {
                console.error('Erro ao remover livro:', error);
                alert('Erro ao remover livro. Tente novamente.');
            }
        }
    };

    const handleLimparLivros = async () => {
        if (window.confirm('Tem certeza que deseja remover TODOS os livros? Esta ação não pode ser desfeita!')) {
            try {
                await api.limparLivros();
                await fetchLivros(); // Atualiza a lista
            } catch (error) {
                console.error('Erro ao limpar livros:', error);
                alert('Erro ao limpar livros. Tente novamente.');
            }
        }
    };

    const filteredLivros = livros.filter(livro => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            livro.titulo.toLowerCase().includes(searchTermLower) ||
            livro.autor.toLowerCase().includes(searchTermLower) ||
            livro.categoria.toLowerCase().includes(searchTermLower)
        );
    });

    if (loading) return <div className={S.loading}>Carregando...</div>;
    if (error) return <div className={S.error}>{error}</div>;

    return (
        <section className={S.principal}>
            <div className={S.header}>
                <h2>Livros Doados</h2>
                {livros.length > 0 && (
                    <button 
                        onClick={handleLimparLivros}
                        className={S.limparButton}
                    >
                        Limpar Todos
                    </button>
                )}
            </div>
            <div className={S.livrosContainer}>
                {filteredLivros.length === 0 ? (
                    <div className={S.noResults}>
                        <p>Nenhum livro encontrado para a busca: "{searchTerm}"</p>
                    </div>
                ) : (
                    filteredLivros.map(livro => (
                        <div key={livro.id} className={S.livroCard}>
                            <button 
                                onClick={() => handleRemoverLivro(livro.id)}
                                className={S.removeButton}
                            >
                                ×
                            </button>
                            <img src={livro.imagem_url} alt={livro.titulo} />
                            <h3>{livro.titulo}</h3>
                            <p>Autor: {livro.autor}</p>
                            <p>Categoria: {livro.categoria}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}