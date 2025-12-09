import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h4>Mock Login Component</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ display: 'block' }}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="ci-agent@test.com"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;