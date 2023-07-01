import React, { useState } from 'react';
import projects from '../assets/proyects'

const Proyects = () => {


    const allCategories = ['All',...new Set(projects.map(item=>item.category))]
    const [categories, setCategories]= useState(allCategories)
    const [project, setProject]=useState(projects)

    const filterCategory=(caategory)=>{
        console.log(caategory)
    }

    return (
        <section id='proyects' className='proyects'>
        <h2 className='title'>Proyectos</h2>
        <div className='proyects_filter'>
            {
                categories.map(item=>(
                    <button className='btn-filter'>{item}</button>
                ))
            }
            
            
            
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