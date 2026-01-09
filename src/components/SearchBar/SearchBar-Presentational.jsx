import styles from "./SearchBar.module.css";

function SearchBarPresentational(props) {
  return (
    <>
      <form className="flex items-center justify-center w-full gap-4 p-8 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg shadow-lg max-w-2xl mx-auto">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={props.onChange}
          value={props.searchTerm}
          className="flex-1 px-6 py-3 border-2 border-slate-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-slate-800 placeholder-slate-400 shadow-sm hover:border-slate-400"
        />
        <input
          type="submit"
          value="SEARCH"
          className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 active:scale-95 transition-all duration-200 cursor-pointer uppercase tracking-wide text-sm"
        />
      </form>
    </>
  );
}

export default SearchBarPresentational;
