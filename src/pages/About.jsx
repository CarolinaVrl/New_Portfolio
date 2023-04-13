import React from 'react';
import diana from '../assets/Diana.png';
import circule from '../assets/Group 82.svg';
const About = () => {
    return (
        <div className='principal'>
            <div className='photos'>
                <img className='fondo' src={circule} alt="" />
                <img className='photo' src={diana} alt="" />

            </div>
            <div className='info'>
                <h2>Hola!</h2>
                <p>Soy una programadora con habilidades en JavaScript usando la librería de React.
                    Manejando framework como Boostraspt, Tailwind y Angular

                </p>
                <p>Soy una persona responsable que disfruta el trabajar en equipo y aprender cosas nuevas en este mundo de la tecnología</p>
                <h3>¡Me encantaría trabajar para tu empresa y cumplir juntos nuevos objectivos!</h3>
                <div className='tecnologys'>
                    <i class="fa-brands fa-square-js"></i>
                    <i class="fa-brands fa-react"></i>
                    <i class="fa-brands fa-angular"></i>
                </div>
            </div>


        </div>

    );
};

export default About;