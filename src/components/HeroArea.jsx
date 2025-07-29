import { Autocomplete, AutocompleteItem, Button } from '@heroui/react'
import React from 'react'

const HeroArea = () => {
    return (
        <section className='bg-[url(/hero.png)] w-full h-[80vh] bg-no-repeat bg-cover mt-4 overflow-x-hidden'>
            <div className='conatiner w-[80%] mx-auto'>
                <h1 className='text-2xl lg:text-6xl w-full lg:w-[60%] font-bold py-10 px-10 mt-[30px] text-white leading-tight text-center lg:text-start '>Find amazing things to do anytime, anywhere in Lagos.</h1>

                <div className='bg-[#FBFCFF] w-full lg:w-[750px] h-auto lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl'>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-2'>
                        <div>
                            <Autocomplete labelPlacement='outside' label="Locarion" placeholder='oshodi' className='w-[100%] '>

                                <AutocompleteItem value="nextgen programmer">
                                    nextgen programmer
                                </AutocompleteItem>
                            </Autocomplete>
                        </div>
                        <div>
                            <Autocomplete labelPlacement='outside' label="Locarion" placeholder='oshodi' className='w-[100%] '>

                                <AutocompleteItem value="nextgen programmer">
                                    nextgen programmer
                                </AutocompleteItem>
                            </Autocomplete>
                        </div>
                        <div>
                            <Autocomplete labelPlacement='outside' label="Locarion" placeholder='oshodi' className='w-[100%] '>

                                <AutocompleteItem value="nextgen programmer">
                                    nextgen programmer
                                </AutocompleteItem>
                            </Autocomplete>
                        </div>
                        <Button className='w-full p-7 mt-2' color='primary'>Search</Button>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default HeroArea