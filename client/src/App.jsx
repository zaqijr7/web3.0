import { Footer, Loader, Navbar, Services, Transactions, Wellcome } from "./components"
import './App.css'
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-wellcome">
        <Navbar/>
        <Wellcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App
