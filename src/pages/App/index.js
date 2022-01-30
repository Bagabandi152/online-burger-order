import css from "./style.module.css";
import Toolbar from "../../component/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../component/SideBar";

function App() {
  return (
    <div>
      <Toolbar />
      <SideBar />
      <main className={css.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
