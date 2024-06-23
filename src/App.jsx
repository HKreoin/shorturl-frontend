import './App.css'
import ListUrlComponent from './components/ListUrlComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import UrlComponent from './components/UrlComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
          {/* // http://localhost:3000 */}
            <Route path='/' element = { <ListUrlComponent />}></Route>
            {/* // http://localhost:3000/urls */}
            <Route path='/urls' element = { <ListUrlComponent />}></Route>
            {/* // http://localhost:3000/create-short-url */}
            <Route path='/create-short-url' element = { <UrlComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
