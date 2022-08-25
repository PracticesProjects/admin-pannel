import './app.css'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/home'
function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>Other Pages</div>
        <Home />
      </div>
    </div>
  )
}

export default App
