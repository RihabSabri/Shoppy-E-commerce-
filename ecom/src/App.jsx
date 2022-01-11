import {Home,ShoppingCat,ProductView, Register,Login,Cart} from './routes'
import {Routes,Route,Navigate} from 'react-router'
import {useSelector} from 'react-redux'

const App = () => {
  const user=useSelector(state => state.user.currentUser)
  return <div>
    <Routes>
    
      <Route exact path='/' element={<Home/>} />
      <Route  exact path="/products/:category" element={ <ShoppingCat/>}/>
      <Route exact path="/product/:id" element={ <ProductView/>}/>
      <Route exact path="/cart" element={ <Cart/>}/>
       <Route exact path="/login" element={user.length!==0?<Navigate to='/'/>: <Login/>}/>
       <Route exact path="/register" element={user.length!==0? <Navigate to='/'/> :<Register/>}/>
    </Routes>
    </div>;
}

export default App;