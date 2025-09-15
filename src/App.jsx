import Button from './common/Button/Button'
import Cart from './components/Cart/Cart'
import DessertList from './components/DessertList/DessertList'
import './App.css'

function App() {

  return (
    <main className='desserts'>
      <DessertList />
      <Cart />
    </main>
  )
}

export default App
