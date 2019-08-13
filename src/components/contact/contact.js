import React from 'react';
import './contact.scss';
import Gmail from '../../images/gmail.png';
import LinkedIn from '../../images/linkedin.png';
import Github from '../../images/github.png';

const Contact = props => {

    return(
        <div class="footer-wrapper">

        <ul>
            <li><a href="mailto: chenderson19899@gmail.com"><img src={Gmail} alt="gmail-logo"/></a></li>
            <li><a href="https://www.linkedin.com/in/cory-henderson-6900b756/"><img src={LinkedIn} alt="linkedin-logo"/></a></li>
            <li><a href="https://github.com/cory0s/"><img src={Github} alt="github-logo"/></a></li>
        </ul>
        </div>
    );
}
export default Contact;