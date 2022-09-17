import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error'; // ways to catch errors with apollo lib
import GetBirds from './components/GetBirds';
import Form from './components/Form';
// instance of the apollo client to see if we have correct connection or not

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error message ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:6969/graphql' })]);

const client = new ApolloClient({ cache: new InMemoryCache(), link: link });

// Provider - reach all graphql api!

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <GetBirds /> */}
      <Form />
    </ApolloProvider>
  );
}

export default App;
