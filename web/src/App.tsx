import './styles/main.css';
import {MagnifyingGlassPlus} from 'phosphor-react'


import logo from './assets/logo.png'
import CardJogo from './Componentes/CardJogo';


function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo}></img>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradiant bg-clip-text'>duo</span> esta aqui
      </h1>
       <div className='grid grid-cols-6 gap-6 mt-4 my-15'>
         <CardJogo title='Leag of legendes' UrlImage='/image-1.png' QuantidadeAnuncios={4} />
       </div>
      <div className="pt-1 bg-nlw-gradiant self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo? </strong>
          <span className="text-zinc-400 block"> Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>

        </div>
      </div>
    </div>


  )
}

export default App
