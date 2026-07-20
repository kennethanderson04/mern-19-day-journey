function App() {
  return (
    <div>
      <Header />
      <h1>Hello React.js!</h1>
      <p>This is my very first React component.</p>
      <Footer />
    </div>
  );
}

function Header(){
  return(
    <h1>Welcome to React</h1>
  );
}

function Footer(){
  return(
    <p>created by Kenneth.</p>
  )
}

export default App;
