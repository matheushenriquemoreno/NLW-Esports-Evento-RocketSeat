import * as Dialog from '@radix-ui/react-dialog';
import BannerAnuncio from '../BannerAnuncio/BannerAnuncio';

interface ModalProps {
  Title: string,
  children: JSX.Element
}

export default function Modal(props: ModalProps) {

  return (
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/80 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-black/25 '>
          <Dialog.Title className='text-3xl font-black'> {props.Title} </Dialog.Title>
          {props.children}
        </Dialog.Content>
      </Dialog.Portal>

  )
}