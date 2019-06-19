import React from 'react';
import './footer.scss';

const Footer = props => {
    
    return(
        <footer>
            {/* <ul>
                <li>Linkedin</li>
                <li>Github</li>
                <li>Gmail</li>
                <li>Instagram</li>
            </ul> */}
            <div>
                © {new Date().getFullYear()}, Built with{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
        </footer>
    );
}
export default Footer;