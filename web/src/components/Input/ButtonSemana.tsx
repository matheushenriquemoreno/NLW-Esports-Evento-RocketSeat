interface ButtonSemanaProps {
    siglaDia: string,
    title: string
}

export default function ButtonSemana(props: ButtonSemanaProps) {
    return (
    <button className='w-10 h-8 rounded bg-zinc-900' title={props.title}>
        {props.siglaDia}
    </button>)
}