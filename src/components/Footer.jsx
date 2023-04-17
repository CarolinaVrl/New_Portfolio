import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <h2>Diana</h2>
            <div className='footer_menu_container'>
                <ul className='footer_menu'>
                    <li>Sobre mí</li>
                    <li>Proyectos</li>
                </ul>
            </div>
            <div className='footer_menu_link'>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/dianacarolinavillarreal/" target='_blank'>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send/?phone=573178244287" target='_blank'><i className="fa-brands fa-square-whatsapp"></i>
                        </a>
                    </li>
                    <li><a href="mailto:dianacarolinav97@gmail.com">
                        <i className="fa-solid fa-square-envelope"></i></a>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default Footer;