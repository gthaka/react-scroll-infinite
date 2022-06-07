import React, { useState, useEffect } from 'react';
// Components
import User from './User';
// Styles
import { Content } from './App.styles';
// API
import { getUsers } from './API';

const bufferZone = 50;
// const imgHolder = "https://via.placeholder.com/150?text=%20";
// const imgHolder = "https://i.gifer.com/XOsX.gif";
const imgHolder = "https://i.gifer.com/7kRE.gif";

const userHolder = [
  { name: { title: '_', first: '_', last: '_' }, picture: { large: imgHolder }, email: '_', },
  { name: { title: '_', first: '_', last: '_' }, picture: { large: imgHolder }, email: '_', },
];
function App() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if ((scrollHeight - scrollTop)-bufferZone <= clientHeight) {
      setPage(prev => prev + 1);
    }
  };
  // const delay = (ms = 2000) => new Promise(r => setTimeout(r, ms));
  useEffect(() => {
    
    const loadUsers = async () => {
      setLoading(true);
      // await delay();
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };

    loadUsers();
  }, [page]);

  return (
    <div className='App'>
      <Content onScroll={handleScroll}>
        {users && users.map((user) => <User key={user.cell} user={user} />)}
        {loading && userHolder.map((user) => <User key={`_${Math.random()}`} user={user} />)}
      </Content>
    </div>
  );
}

export default App;
