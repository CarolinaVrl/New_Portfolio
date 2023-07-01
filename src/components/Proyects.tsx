import React from 'react';
import projects from '../assets/proyects'

const Proyects = () => {
    return (
        <section id='proyects' className='proyects'>
        <h2 className='title'>Proyectos</h2>
        <div className='proyects_filter'>
            <ul>
                <li><button className='btn-filter'>All</button></li>
                <li><button className='btn-filter'>HTML Y CSS</button></li>
                <li><button className='btn-filter'>JavaScript</button></li>
                <li><button className='btn-filter'>React</button></li>
                <li><button className='btn-filter'>Angular</button></li>
            </ul>
        </div>
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
    );
};

export default Proyects;