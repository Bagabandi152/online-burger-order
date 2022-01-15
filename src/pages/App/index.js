import css from './style.module.css';
import Toolbar from '../../component/Toolbar';
import BurgerBuilder from '../BurgerBuilder'

function App() {
  return (
    <div>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilder />
      </main>
    </div>
  );
}

export default App;
