import profile from '../../image/perfil.svg';
import bag from '../../image/sacola.svg';
import './style.css'

const icons = [profile, bag]

export default function IconsHeader() {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'><img src={icon} alt=''></img></li>
            ))}
        </ul>
    )
}