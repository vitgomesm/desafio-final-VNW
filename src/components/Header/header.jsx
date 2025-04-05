import { useState, useContext, createContext } from 'react'
import logo from "../../assets/logo.png"
import busca from "../../assets/busca.png"
import { Link } from "react-router-dom"
import S from './header.module.scss'

// Criar contexto para a busca
export const SearchContext = createContext({
    searchTerm: '',
    setSearchTerm: () => {}
})

export function useSearch() {
    return useContext(SearchContext)
}

export default function Header(){
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            <header>
                <section className={S.boxLogo}>
                    <img src={logo} alt="imagem de um livro" />
                    <h1>Livros Vai na Web</h1>
                </section>
                <nav className={S.boxMenu}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/doados">Livros Doados</Link></li>
                        <li><Link to="/quero-doar">Quero Doar</Link></li>
                    </ul>
                </nav>
                <div className={S.boxSearch}> 
                    <input 
                        className={S.boxInput} 
                        type="text"
                        placeholder="Buscar por título, autor ou categoria"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <img src={busca} alt="buscar" />
                </div>
            </header>
        </SearchContext.Provider>
    )
}