import './styles/main.css';
import logo from './assets/logo.png'
import CardJogo from './components/CardJogo';
import BannerAnuncio from './components/BannerAnuncio';
import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';


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
        { games.map(game => {
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

        <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-black/25 '>
          <Dialog.Title className='text-center'> publique um Anuncio </Dialog.Title>

          <Dialog.Content>
            Conteudo aqui

          </Dialog.Content>
        </Dialog.Content>
        </Dialog.Portal>
        </Dialog.Root>

    </div>


  )
}

export default App
