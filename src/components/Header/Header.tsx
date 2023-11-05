import Logo from '../../../public/logo.svg'
import { HeaderComponent } from './Header.styles'

export function Header() {
    return(
        <HeaderComponent>
            <img src={Logo} alt="" />
        </HeaderComponent>
    )
}