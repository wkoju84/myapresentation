import './assets/global.css';
import Form from './Formulario/Form';
import Sidebar from './Sidebar/Sidebar';

function App() {

 

  return (
    <>
      <div className="l-app">

        <Sidebar/>
        <div className="l-content">

          {/* -- Sessão Principal -- */}
          <div className="l-page bg__profile">
            
            <main>
              <h1 className="title">Olá, me chamo William</h1>
              <p className="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="https://github.com/wkoju84">Github</a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/william-silva-817673106/">Linkedin</a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a>
            </main>
          </div>

          {/* -- Sessão Sobre mim -- */}
          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">Sobre mim</h1>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Per aumento de cachacis, eu reclamis.Casamentiss faiz malandris se pirulitá.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
              <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.</p>
              <p>Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Sapien in monti palavris qui num significa nadis i pareci latim.</p>
            </article>
          </div>

          {/* -- Sessão Contatos-- */}
          <div className="l-page" id="contatos">
            <section>
              <h1 className="title">Posso te ajudar?</h1>

              <nav className="c-nav">
                <a className="c-nav__item" href="https://github.com/wkoju84">Github</a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/william-silva-817673106/">Linkedin</a>
                <a className="c-nav__item" href="tel:+5521972190000">Telefone</a>
              </nav>

              <Form/>
            </section>

            <footer className="u-my-3">
              <span>Todos os direitos reservados William.</span>
            </footer>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
