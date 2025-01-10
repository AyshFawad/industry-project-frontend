import './Header.scss'
import Scotiabank from '../../assets/logo/scotiabank.svg'
import Account from '../../assets/logo/account.svg'
import Person from '../../assets/logo/person.svg'

function Header () {
    return(
        <>
        <header>
        <img src ={Scotiabank}/>
        <img src ={Account} />
        <img src ={Person} />
        </header>
        </>)
}

export default Header;