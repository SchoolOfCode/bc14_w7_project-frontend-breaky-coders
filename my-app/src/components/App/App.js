import Addflashcard from './Addflashcard';
import './App.css';
import Homepage from './Homepage'
import Newpage from './Newpage';
import Testme from './Testme';
import {useState} from 'react'

function App() {
  const [page, setPage] = useState('homepage')
 
  const renderPage = () => {
    if (page === 'homepage') {
      return <Homepage setPage={setPage} />;
    } else if (page === 'newpage') {
      return <Newpage setPage={setPage} />;
    }else if (page === 'addcard') {
      return <Addflashcard setPage={setPage} />;
    }else if (page === 'testme') {
      return <Testme setPage={setPage} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App;



