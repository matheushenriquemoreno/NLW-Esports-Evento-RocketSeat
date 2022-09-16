
interface CardJogoProps{
    title: string,
    UrlImage: string,
    QuantidadeAnuncios: number
}

const CardJogo = (props: CardJogoProps) => {
    return (
        <div>
            <a href='' className="relative round-lg overflow-hidden">
            <img src={props.UrlImage} /> 
            <div className='w-full pt-16 pb-4 px-4 bg-game absolute bottom-0 left-0 right-0'>
                <strong className=' font-bold text-white block'> {props.title} </strong>
                <span className="text-zinc-300 text-sm block"> {props.QuantidadeAnuncios} anuncios </span>
            </div>
            </a>
        </div>
    )
}

export default CardJogo;