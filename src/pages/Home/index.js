
import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conteudo'>
        <img src={background} alt='Fundo de Cabeçalho' className='background' />
        <div className='info'>
          <div>
            <input name='usuario' placeholder='@username' />
            <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/64918947?v=4" className='profile' alt="foto perfil" />
            <div>
              <h3>Marcos Pelaez</h3>
              <span>@marcospelaez-dev</span>
              <p>Descrição</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className='repositorio'>Repositórios</h4>
            <ItemList title="Teste1" description="Teste de Descrição" />
            <ItemList title="Teste1" description="Teste de Descrição" />
            <ItemList title="Teste1" description="Teste de Descrição" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
