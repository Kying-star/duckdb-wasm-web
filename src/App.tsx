import { testDuckDB } from "./utils";

function App() {
  return (
    <button
      onClick={() => {
        testDuckDB();
      }}
    >
      test duck db
    </button>
  );
}

export default App;
