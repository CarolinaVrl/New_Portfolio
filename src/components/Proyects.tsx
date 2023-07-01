import React, { useState } from 'react';
import projects from '../assets/proyects'

const Proyects = () => {


    const allCategories = ['All', ...new Set(projects.map(item => item.category))]
    const [categories, setCategories] = useState(allCategories)
    const [project, setProject] = useState(projects)

    const filterCategory = (item) => {
        if(item === 'All'){
            setProject(projects)
            return
        }
        const filter = projects.filter(projects => projects.category === item)
        setProject(filter)
        
    }

    return (
        <section id='proyects' className='proyects'>
            <h2 className='title'>Proyectos</h2>
            <div className='proyects_filter'>
                {
                    categories.map(item => (
                        <button
                            type='button'
                            key={item}
                            onClick={()=>filterCategory(item)}
                            className='btn-filter'><span>{item.charAt(0)}</span>{item.substring(1)}</button>
                    ))
                }



            </div>
            <div className='proyects_container_main'>
                {
                    project.map(item => (
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