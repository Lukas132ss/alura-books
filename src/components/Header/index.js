import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import './style.css';

export default function Header() {
    return (
        <header className="App-header">
            <Logo />
            <OptionsHeader />
            <IconsHeader />
        </header>
    )
}