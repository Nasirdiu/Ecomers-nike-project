import React from 'react';

const Hero = ({heroapi :{title,subtitle,img,btntext,videos,sociallinks}}) => {
    // console.log(heroapi);
    return (
        <div className=''>
                <div className=''></div>
                <div className=''>
                    <div className=''>
                        <h1>{title}</h1>
                        <h1>{subtitle}</h1>
                        <button>{btntext}</button>
                        {/* <div></div>
                        <div></div> */}
                    </div>
                    <div className=''>
                        <img className="" src={img} alt="" />
                    </div>
                </div>
           
        </div>
    );
};

export default Hero;