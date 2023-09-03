import profile from '../../image/perfil.svg';
import bag from '../../image/sacola.svg';
import styled from 'styled-components';

const icons = [profile, bag]

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`;

const Icons = styled.ul`
    display: flex;
    align-items: center;
`;

export default function IconsHeader() {
    return (
        <Icons>
            {icons.map((icon) => (
                <Icon><img src={icon} alt=''></img></Icon>
            ))}
        </Icons>
    )
}