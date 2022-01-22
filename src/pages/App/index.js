import css from './style.module.css';
import Toolbar from '../../component/Toolbar';
import BurgerPage from '../BurgerPage'

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
