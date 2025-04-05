# Sistema de Doação de Livros - Vai na Web

Este é um projeto full-stack de um sistema de doação de livros, desenvolvido como parte do desafio final do curso Vai na Web. O sistema permite que usuários doem livros e visualizem uma lista de livros doados.

## 🚀 Tecnologias

### Frontend
- React
- React Router DOM
- Axios
- SCSS Modules
- Vite
- Render (Deploy)

### Backend
- Flask
- Flask-CORS
- SQLite

## 💻 Funcionalidades

- **Página Inicial**: Apresentação do projeto e sua importância
- **Livros Doados**: 
  - Visualização de todos os livros doados
  - Busca por título, autor ou categoria
  - Remoção individual de livros
  - Opção para limpar todos os livros
- **Quero Doar**: Formulário para doação de novos livros

## 🛠️ Instalação

### Frontend

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Backend

```bash
# Instalar dependências Python
cd backend
pip install flask flask-cors

# Iniciar servidor Flask
python app.py
```

## 🌐 Endpoints da API

### GET /livros
Retorna a lista de todos os livros doados

### POST /doar
Cadastra um novo livro

Corpo da requisição:
```json
{
    "titulo": "Nome do Livro",
    "categoria": "Categoria do Livro",
    "autor": "Nome do Autor",
    "imagem_url": "URL da Imagem do Livro"
}
```

### DELETE /livros/{id}
Remove um livro específico

### DELETE /livros/limpar
Remove todos os livros do sistema

## 🖥️ Ambiente

### Desenvolvimento
- Frontend: http://localhost:5176
- Backend: http://localhost:5000

### Produção
- Frontend: https://desafio-final-vnw.onrender.com (ou sua URL do Render)

## 🚀 Deploy

O projeto está hospedado no Render. Para acessar a versão em produção, visite: https://desafio-final-vnw.onrender.com (substitua pela sua URL do Render)

Para fazer deploy de novas alterações:
1. Faça push das alterações para o repositório GitHub
2. O Render automaticamente detectará as mudanças e fará um novo deploy
3. Você pode acompanhar o progresso do deploy no dashboard do Render

## 📁 Estrutura do Projeto

```
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React reutilizáveis
│   ├── Pages/         # Páginas da aplicação
│   ├── services/      # Serviços e configuração da API
│   └── routes/        # Configuração de rotas
├── backend/
│   ├── app.py        # Servidor Flask
│   └── database.db   # Banco de dados SQLite
└── README.md
```

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autor

Feito com ❤️ por [Vitor Gomes] como projeto final do curso Vai na Web.
