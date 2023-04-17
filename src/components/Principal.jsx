import React from 'react';
import projects from '../assets/proyects'
import diana from '../assets/Diana.png'
import diana2 from '../assets/diana2.png'
import tecnologys from '../assets/tecnologys';

const Principal = () => {
    return (
        <div className='principal'>
            <div className='together'>


                <section className='inicio'>
                    <h2 >Hola! <span style={{ color: 'white' }}> Soy</span> </h2>
                    <h1>Diana Carolina <br /> Villarreal</h1>
                    <h2 style={{ color: 'white' }}>Desarrolladora FrontEnd</h2>
                    <div>
                        <button className='dowload'>Descargar CV</button>
                        <button>Sobre mí</button>
                    </div>

                </section>
                <section className='home'>
                    <div className='home_position'>
                        <div className='home_photo'>
                            <img src={diana} alt="" />
                        </div>
                        <div className='home_media'>
                            <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href=""><i className="fa-brands fa-whatsapp"></i></a>
                            <a href=""><i className="fa-brands fa-github"></i></a>

                        </div>

                    </div>
                </section>
            </div>
            <section className='aboutMe'>
                <h2>Sobre mí</h2>
                <div className='about_container'>
                    <div className='about_photo'>
                        <img src={diana2} alt="" />

                    </div>
                    <div className='about_text'>
                        <p>
                            Soy una programadora con habilidades en JavaScript usando la librería de React.
                            Manejando framework como Bootstrap, Tailwind y Angular.


                            Soy una persona responsable que disfruta el trabajar en equipo y aprender cosas nuevas en este mundo de la tecnología

                        </p>
                        <h3>¡Me encantaría trabajar para tu empresa y cumplir juntos nuevos objetivos!</h3>
                        <button>Contáctame!</button>

                    </div>

                    

                </div>

            </section>
            <section className='exp'>
                <h2>Mi Experiencia</h2>
                <div className='exp_container'>

                    <div className='container'>
                        <h3>Desarrollo FrontEnd</h3>
                        <div className='tecnology_container'>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>HTML</h2>
                                    <h3>Intermedio</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>CSS</h2>
                                    <h3>Intermedio</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>Git</h2>
                                    <h3>Intermedio</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>JavaScript</h2>
                                    <h3>Intermedio</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>React</h2>
                                    <h3>Intermedio</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>Tailwind</h2>
                                    <h3>Básico</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>Bootstrap</h2>
                                    <h3>Básico</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <h3>Desarrollo BackEnd</h3>
                        <div className='tecnology_container'>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>NodeJs</h2>
                                    <h3>Básico</h3>
                                </div>
                            </div>
                            <div className='tecnology'>
                                <i class="fa-regular fa-square-check"></i>
                                <div>
                                    <h2>PostgreSQL</h2>
                                    <h3>Básico</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='container_photos'>
                        {
                            tecnologys.map(item => (
                                <div className='container_img'>
                                    <img src={item.img} alt="" />
                                    <h3>{item.name}</h3>
                                </div>
                            ))
                        }



                    </div>

                </div>

            </section>
            <section className='proyects'>
                <h2 className='title'>Proyectos</h2>
                {/* <div className='proyects_filter'>
                    <ul>
                        <li>All</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML - CSS</li>
                    </ul>
                </div> */}
                <div className='proyects_container_main'>
                    {
                        projects.map(item => (
                            <div className='proyects_card'>
                                <img src={item.img} alt="" />
                                <div className='proyects_text'>
                                    <h2>{item.name}</h2>
                                    <a href={item.url} target='_blank'>Sitio Web</a>
                                </div>

                            </div>
                        ))

                    }
                </div>


            </section>
            <section className='contact'>
                <h2>Contáctame</h2>
                <div className='container_contact'>
                    <i className="fa-regular fa-paper-plane"></i>
                    <h3 className='contact-title'>Email</h3>
                    <h3 className='contact-subtext'>dianacarolinav97@gmail.com</h3>
                    <a href="">Escríbeme</a>

                </div>
                <div className='container_contact'>
                    <i className="fa-brands fa-whatsapp"></i>
                    <h3 className='contact-title'>Whatsapp</h3>
                    <h3 className='contact-subtext'>+57 3178244287</h3>
                    <a href="">Escríbeme</a>
                </div>
                <div className='container_contact'>
                    <i className="fa-brands fa-linkedin-in"></i>
                    <h3 className='contact-title'>Linkedin</h3>
                    <h3 className='contact-subtext'>linkedin.com/in/dianacarolinavillarreal/</h3>
                    <a href="">Escríbeme</a>

                </div>
            </section>

        </div>
    );
};

export default Principal;