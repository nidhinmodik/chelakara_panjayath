import React from 'react'
import secretary from '../../assets/secretary.jpeg';
import president from '../../assets/president.jpeg';
import Image from 'next/image';


const Gallery = () => {
    return (
        <div className='w-full flex flex-col gap-y-[1px] overflow-x-auto mx-10'>
            <div className='text-xl font-bold text-dark relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3'>
                Sarpanch
            </div>
            <div className='flex flex-cols-3 flex-2 text-dark'>
                <div>
                    <b><h2 className='my-4'>President</h2></b>
                    <Image
                        className=''
                        width={70}
                        height={70}
                        src={president}
                        alt='president'
                    />
                    <h4>Padmaja M K</h4>
                    <h5>mob : 9744216167</h5>
                    <h5>email : chelakkaragp@gmail.com</h5>
                </div>
            </div>
            <div className='flex flex-cols-3 flex-2 text-dark'>
                <div>
                    <b><h2 className='my-4'>Secretary</h2></b>
                    <Image
                        className=''
                        width={70}
                        height={70}
                        src={secretary}
                        alt='secretary'
                    />
                    <h4>Raju N P</h4>
                    <h5>mob : 8592886914</h5>
                    <h6>email : rajunp2806@gmail.com</h6>
                </div>
            </div>
            {/* <div className='flex flex-cols gap-2 text-white'>
                <a href='https://api.whatsapp.com/send?phone=+918943947138' target='_blank'>WhatsApp</a>
            </div> */}
        </div>
    )
}

export default Gallery