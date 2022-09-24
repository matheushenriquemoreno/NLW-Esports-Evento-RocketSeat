import './styles/main.css';
import logo from './assets/logo.png'
import CardJogo from './components/CardJogo/CardJogo';
import BannerAnuncio from './components/BannerAnuncio/BannerAnuncio';
import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import FormAnuncio from './components/FormAnuncio/FormAnuncio';
import Modal from './components/Modal/Modal';

interface gamesProps {
  Id: number,
  Title: string,
  BannerUrl: string,
  _count: {
    Anuncios: number
  }
}

function App() {

  const [games, setGames] = useState<gamesProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then(response => response.json())
      .then(dados => setGames(dados))
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo}></img>

      <h1 className='text-6xl text-white font-black mt-10'>
        Seu <span className='text-transparent bg-nlw-gradiant bg-clip-text'>duo</span> esta aqui
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-4 my-15'>
        {
          games.map(game => {
            return (
              <CardJogo
                key={game.Id}
                title={game.Title}
                UrlImage={game.BannerUrl}
                QuantidadeAnuncios={game._count.Anuncios}
              />
            )
          })}

      </div>
      <Dialog.Root>
        <BannerAnuncio />
        <Modal Title='publique um Anuncio'  >
          <FormAnuncio Games={games} />
        </Modal>
      </Dialog.Root>
    </div>


  )
}

export default App
