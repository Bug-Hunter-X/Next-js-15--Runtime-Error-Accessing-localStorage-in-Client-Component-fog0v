```javascript
// pages/aboutSolution.js
export default function About() {
  // Solution: Use optional chaining and a default value
  const data = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null; 

  return (
    <div>
      <h1>About Page</h1>
      {data ? <p>Welcome, {data.name}!</p> : <p>No user data found.</p>}
    </div>
  );
}
```