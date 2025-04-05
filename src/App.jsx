import { Outlet } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './global.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
