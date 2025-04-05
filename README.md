# Sistema de Doação de Livros - Vai na Web

Este é um projeto full-stack de um sistema de doação de livros, desenvolvido como parte do desafio final do curso Vai na Web. O sistema permite que usuários doem livros e visualizem uma lista de livros doados.

## 🚀 Tecnologias

### Frontend
- React
- React Router DOM
- Axios
- SCSS Modules
- Vite

### Backend
- Flask
- Flask-CORS
- SQLite
- Postman

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

## 🖥️ Portas

- Frontend: http://localhost:5176
- Backend: http://localhost:5000

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

## 👥 Autor

Feito com ❤️ por Vitória Gomes como projeto final do curso Vai na Web.
