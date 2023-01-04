import './App.css';
import { useState } from 'react';
import { Users } from './users';
import Table from './Table';

function App() {
  const [query, setQuery] = useState('');

  const search = (data) => {
    return Users.filter((item) => item.first_name.toLowerCase().includes(query));
  }


  return (
    <div className="app">
      <input
        type="text"
        placeholder='search'
        className='search'
        onChange={e => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
