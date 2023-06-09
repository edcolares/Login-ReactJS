import { Outlet } from 'react-router-dom';
import { Container } from 'reactstrap'
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <div className='App'>


      <AuthProvider>
        
        <Container className="my-3 px-4 py-4 bg-white rounded shadow-sm">
          <Outlet></Outlet>
        </Container>

      </AuthProvider>

    </div>

  )
}

export default App;