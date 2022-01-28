import React from 'react';
import { SiVisualstudiocode, SiGithub, SiFigma, SiPostman, SiNpm } from 'react-icons/si'
import { GrFirefox } from 'react-icons/gr'

const IconTools = () => {
    return (
        <>
            <div className='skills-tools--icon'>
                <SiVisualstudiocode/>
            </div>
            <div className='skills-tools--icon'>
                <SiGithub/>
            </div>
            <div className='skills-tools--icon'>
                <GrFirefox/>
            </div>
            <div className='skills-tools--icon'>
                <SiFigma/>
            </div>
            <div className='skills-tools--icon'>
                <SiPostman/>
            </div>
            <div className='skills-tools--icon'>
                <SiNpm/>
            </div>
        </>
    )
};

export default IconTools;
