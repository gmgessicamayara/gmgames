import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';
function Navbar(){
    return(
        <header>
        <nav className="container">
            <div className="gmgames-nav-content">
                <h1>GM Games</h1>
                <a href="https://github.com/gmgessicamayara" target="_blank" rel="noreferrer">
                    <div className="gmgames-contact-container">
                        <GithubIcon/>
                        <p className="gmgames-contact-link">/gmgessicamayara</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;