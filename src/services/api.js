import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const api = {
    listarLivros: async () => {
        try {
            const response = await axios.get(`${API_URL}/livros`);
            return response.data;
        } catch (error) {
            console.error('Erro ao listar livros:', error);
            throw error;
        }
    },

    cadastrarLivro: async (livro) => {
        try {
            const response = await axios.post(`${API_URL}/doar`, livro);
            return response.data;
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error);
            throw error;
        }
    },

    removerLivro: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/livros/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao remover livro:', error);
            throw error;
        }
    },

    limparLivros: async () => {
        try {
            const response = await axios.delete(`${API_URL}/livros/limpar`);
            return response.data;
        } catch (error) {
            console.error('Erro ao limpar livros:', error);
            throw error;
        }
    }
};
