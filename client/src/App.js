import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {X}from './components/progressbar'
import { Nav } from './components/Nav';
import { Jumbo } from './components/jumbotron';
import { Cards } from './components/Card';
import {  useQuery } from '@apollo/client';
import {GET_PRODUCTS}from './utils/queries'
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
    <Nav/>
    {/* <Jumbo/> */}

    </ApolloProvider>
  );
}

export default App;
