import React from 'react'
import TemeImage1 from '../images/timeimage1.png'
import TemeImage2 from '../images/timeimage2.png'
import TemeImage3 from '../images/timeimage3.png'
import TemeImage4 from  '../images/timeimage4.png'
import TemeImage5 from '../images/timeimage5.png'
import TemeImage6 from '../images/timeimage6.png'

const Ourtem = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Meet Our team</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Meet our diverse team of wolrd-class creators,designers and problem solvers</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={TemeImage1}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={TemeImage2}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={TemeImage3}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={TemeImage4}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={TemeImage5}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={TemeImage6}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ourtem
