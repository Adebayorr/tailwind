import './index.css';

function App() {
  return (
    <div className="App">
      <header className="header flex w-full justify-between items-center px-4 py-2 bg-purple-400">
        <h2 className="logo text-xl">Logo</h2>
        <nav className="navbar flex gap-x-2 content-center">
          <a href="/" className="p-2 hover:text-sky-300">Home</a>
          <a href="/event" className="p-2 hover:text-sky-300">Events</a>
          <a href="/menu" className="p-2 hover:text-sky-300">Menu</a>
          <a href="/lodge" className="p-2 hover:text-sky-300">Lodge</a>
        </nav>
      </header>

    </div>
  );
}

export default App;
