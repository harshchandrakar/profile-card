import "./App.css";
import UserProfile from "./Components/UserProfile";
import { useSelector } from "react-redux";
import Authentication from "./Components/Authentication";
function App() {
  const status = useSelector((state) => state.auth.status);
  return (
    <div className="App">{status ? <UserProfile /> : <Authentication />}</div>
  );
}

export default App;
