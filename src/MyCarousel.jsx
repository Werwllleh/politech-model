import React, {Suspense} from 'react'
import {Carousel} from 'antd';
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Notepad from "./Notepad";
import OilBottle from "./Oil_bottle";
import {Printer} from "./Printer";

const MyCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div>
                <ul className={'main_dots'}> {dots} </ul>
            </div>
        )
    };

    return (
        <Carousel {...settings}>
            <div>
                <Canvas className='canvas'>
                    <OrbitControls autoRotate={true} enableZoom={true}/>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 3]} intensity={1}/>
                    <Suspense fallbak={null}>
                        <Notepad/>
                    </Suspense>
                </Canvas>
            </div>
            <div>
                <Canvas className='canvas'>
                    <OrbitControls autoRotate={true} enableZoom={true}/>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 3]} intensity={1}/>
                    <Suspense fallbak={null}>
                        <OilBottle/>
                    </Suspense>
                </Canvas>
            </div>
            <div>
                <Canvas className='canvas'>
                    <OrbitControls autoRotate={true} enableZoom={true}/>
                    <ambientLight intensity={0.5}/>
                    <directionalLight position={[-2, 5, 3]} intensity={1}/>
                    <Suspense fallbak={null}>
                        <Printer/>
                    </Suspense>
                </Canvas>
            </div>
        </Carousel>
    );
};
export default MyCarousel;