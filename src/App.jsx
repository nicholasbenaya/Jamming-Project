// import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Jamming Project
        </h1>
        <p className="text-slate-300 text-lg font-light tracking-wide">
          Discover and create your perfect playlist
        </p>
      </div>
      <SearchBar />
    </div>
  );
}

export default App;
