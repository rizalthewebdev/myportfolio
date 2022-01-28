import React from 'react';
import { SiReact, SiExpress, SiTailwindcss, SiBootstrap } from 'react-icons/si'

const IconFramework = () => {
    return (
        <>
            <div className='skills-tools--icon'>
                <SiReact/>
            </div>    
            <div className='skills-tools--icon'>
                <SiExpress/>
            </div>
            <div className='skills-tools--icon'>
                <SiTailwindcss/>
            </div>
            <div className='skills-tools--icon'>
                <SiBootstrap/>
            </div>
        </>
    )
};

export default IconFramework;
