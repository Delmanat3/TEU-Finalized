import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Checkout from './pages/Checkout';
import { setContext } from '@apollo/client/link/context';
import { Nav } from './components/Nav';
import {Login}from "./pages/Login"
import {SignUp}from "./pages/SignUp"
import Detail from './pages/Detail';
import { StoreProvider } from './utils/GlobalState';
import Cart from './components/Cart';

const httpLink = createHttpLink({
  uri: '/graphql',
});



const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it existsauthLink.concat(httpLink),
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
   
<StoreProvider>
    <Routes>
    <Route exact path='/' element={<Nav/>} />
    <Route  exact path='/Checkout' element={<Checkout/>} />
    <Route  exact path='/Detail' element={<Detail/>} />
    <Route  exact path='/Login' component={Login} />
    <Route exact path='/SignUp' element={<SignUp/>} />
    </Routes>
</StoreProvider>
    </Router>
    </ApolloProvider>
  );
}

export default App;
