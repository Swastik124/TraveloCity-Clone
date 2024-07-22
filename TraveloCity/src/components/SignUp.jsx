import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/userData')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill out all fields');
      return;
    }
    axios.post('https://example.com/api/users', {
      firstName,
      lastName,
      email,
      password,
    })
      .then(response => {
        setData([...fetchedData, response.data]);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;