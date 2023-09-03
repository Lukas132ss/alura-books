import './style.css'
const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

export default function OptionsHeader() {
    return (
        <ul className='options'>
            {textOptions.map((text) => (
                <li className='option'><p>{text}</p></li>
            ))}
        </ul>
    )
}