import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiFirebase, SiMongodb } from 'react-icons/si'
import { BiGitBranch } from 'react-icons/bi'

const IconSkill = () => {
    return (
        <>                
            <div className='skills-tools--icon'>
                <SiHtml5/>
            </div>        
            <div className='skills-tools--icon'>
                <SiCss3/>
            </div>        
            <div className='skills-tools--icon'>
                <SiJavascript/>
            </div>            
            <div className='skills-tools--icon'>
                <SiNodedotjs/>
            </div>        
            <div className='skills-tools--icon'>
                <SiFirebase/>
            </div>        
            <div className='skills-tools--icon'>
                <SiMongodb/>
            </div>    
            <div className='skills-tools--icon'>
                <BiGitBranch/>
            </div>    
        </>

    )
};

export default IconSkill;
