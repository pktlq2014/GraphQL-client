import logo from './logo.svg';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import Book from './components/book';
const client = new ApolloClient({
  uri: 'http://localhost:3050/graphql',
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Book />
    </ApolloProvider>
  );
}

export default App;
