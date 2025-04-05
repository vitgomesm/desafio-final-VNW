from flask import Flask, request, jsonify, render_template
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Função para criar a tabela no banco de dados
def criar_tabela():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS LIVROS (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            categoria TEXT NOT NULL,
            autor TEXT NOT NULL,
            imagem_url TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Criar a tabela ao iniciar a aplicação
criar_tabela()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/doar', methods=['POST'])
def cadastrar_livro():
    print('\n=== Recebendo requisição POST em /doar ===')    
    dados = request.get_json()
    print(f'Dados recebidos: {dados}')

    if not dados or not all(k in dados for k in ['titulo', 'categoria', 'autor', 'imagem_url']):
        print('Erro: Dados incompletos')
        return jsonify({"erro": "Dados incompletos"}), 400

    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    try:
        print('Tentando inserir no banco de dados...')
        cursor.execute('''
            INSERT INTO LIVROS (titulo, categoria, autor, imagem_url)
            VALUES (?, ?, ?, ?)
        ''', (dados['titulo'], dados['categoria'], dados['autor'], dados['imagem_url']))

        conn.commit()
        livro_id = cursor.lastrowid
        print(f'Livro cadastrado com sucesso! ID: {livro_id}')

        response_data = {
            "mensagem": "Livro cadastrado com sucesso",
            "id": livro_id,
            "titulo": dados['titulo'],
            "categoria": dados['categoria'],
            "autor": dados['autor'],
            "imagem_url": dados['imagem_url']
        }
        print(f'Retornando resposta: {response_data}')
        return jsonify(response_data), 201

    except Exception as e:
        print(f'Erro ao cadastrar livro: {str(e)}')
        return jsonify({"erro": str(e)}), 500
    finally:
        conn.close()

@app.route('/livros', methods=['GET'])
def listar_livros():
    print('\n=== Recebendo requisição GET em /livros ===')
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    try:
        print('Buscando livros no banco de dados...')
        cursor.execute('SELECT * FROM LIVROS')
        livros = cursor.fetchall()
        print(f'Encontrados {len(livros)} livros')

        livros_json = [{
            "id": livro[0],
            "titulo": livro[1],
            "categoria": livro[2],
            "autor": livro[3],
            "imagem_url": livro[4]
        } for livro in livros]

        print(f'Retornando livros: {livros_json}')
        return jsonify(livros_json)

    except Exception as e:
        print(f'Erro ao listar livros: {str(e)}')
        return jsonify({"erro": str(e)}), 500
    finally:
        conn.close()

@app.route('/livros/<int:id>', methods=['DELETE'])
def remover_livro(id):
    print(f'\n=== Recebendo requisição DELETE para o livro {id} ===')
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    try:
        # Verificar se o livro existe
        cursor.execute('SELECT * FROM LIVROS WHERE id = ?', (id,))
        livro = cursor.fetchone()
        if not livro:
            return jsonify({"erro": "Livro não encontrado"}), 404

        # Remover o livro
        cursor.execute('DELETE FROM LIVROS WHERE id = ?', (id,))
        conn.commit()
        print(f'Livro {id} removido com sucesso')
        return jsonify({"mensagem": "Livro removido com sucesso"}), 200

    except Exception as e:
        print(f'Erro ao remover livro: {str(e)}')
        return jsonify({"erro": str(e)}), 500
    finally:
        conn.close()

@app.route('/livros/limpar', methods=['DELETE'])
def limpar_livros():
    print('\n=== Recebendo requisição para limpar todos os livros ===')
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    try:
        cursor.execute('DELETE FROM LIVROS')
        conn.commit()
        print('Todos os livros foram removidos com sucesso')
        return jsonify({"mensagem": "Todos os livros foram removidos"}), 200

    except Exception as e:
        print(f'Erro ao limpar livros: {str(e)}')
        return jsonify({"erro": str(e)}), 500
    finally:
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)
