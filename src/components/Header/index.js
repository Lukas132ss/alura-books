import { styled } from "styled-components";
import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </HeaderContainer>
    )
}