import * as Dialog from '@radix-ui/react-dialog';
import { Check, GameController } from "phosphor-react";
import ButtonSemana from "../Input/ButtonSemana";
import { Input } from "../Input/Input";
import * as Checkbox from '@radix-ui/react-checkbox';

interface FormAnuncioProps {
  Games: any []
}


const FormAnuncio = (props: FormAnuncioProps) => {
  return (
    <form className='mt-8 flex flex-col gap-4 font-semibold'>

      <div className='flex flex-col gap-2'>
        <label htmlFor="game" className=''> Qual o Game? </label>
        <select className='bg-zinc-900 py-3 px-4  rounded text-sm placeholder:text-zinc-500' id='game'> 
          <option value="">Escolha seu game</option>
    
        </select>
      </div>

      <div className='flex flex-col gap-2' >
        <label>Seu nome ou (nickname)</label>
        <Input id='name' placeholder='Como te chamam no game?' />
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <div className='flex flex-col gap-2'>
          <label>Joga há quantos anos</label>
          <Input id='anosdejogo' type='number' placeholder='pode ser zero' />
        </div>

        <div className='flex flex-col gap-2'>
          <label> Qual seu discord</label>
          <Input id='discord' type='text' placeholder='usuario#0000' />
        </div>
      </div>

      <div className='flex gap-6'>

        <div className='flex flex-col gap-2'>
          <label> Quais dias da semana costuma jogar?</label>
          <div className='grid grid-cols-4 gap-2'>
            <ButtonSemana title='Domingo' siglaDia='D' />
            <ButtonSemana title='Segunda' siglaDia='S' />
            <ButtonSemana title='Terça' siglaDia='T' />
            <ButtonSemana title='Quarta' siglaDia='Q' />
            <ButtonSemana title='Quinta' siglaDia='Q' />
            <ButtonSemana title='Sexta' siglaDia='S' />
            <ButtonSemana title='Sabado' siglaDia='S' />
          </div>
        </div>

        <div className='flex flex-col gap-2 flex-1'>
          <label> Qual horário do dia? </label>
          <div className='grid grid-cols-2 gap-2'>
            <Input id='horaInicio' type='time' placeholder='De' />
            <Input id='horaFinal' type='time' placeholder='Até' />
          </div>
        </div>
      </div>

      <div className='mt-2 flex gap-2 text-sm'>
        <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
          <Checkbox.Indicator> 
            <Check className='w-4 h-4 text-emerald-800' />
          </Checkbox.Indicator>
        </Checkbox.Root>
        Comstumo me conectar o chat de voz
      </div>

      <footer className='mt-4 flex justify-end gap-4'>
        <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md'>Cancelar</Dialog.Close>
        <button className='bg-violet-500 px-5 h-12 rounded-md flex items-center gap-3 hover:bg-violet-600' type='submit'>
          <GameController className='w-6 h-6' />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}

export default FormAnuncio;