import React from 'react'

const FooterCat = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-200 py-6">
                <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 class="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-black">
                    Pellentesque suscipit  <span class="text-blue-500">fringilla libero eu.</span>
                    </h2>

                    <p class="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-900">
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Cum quidem officiis reprehenderit, aperiam veritatis non, quod veniam fuga possimus hic
                        explicabo laboriosam nam. A tempore totam ipsa nemo adipisci iusto!
                    </p>

                    <div class="inline-flex w-full mt-6 sm:w-auto">
                        <a href="#" class="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Git a Demo
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FooterCat
