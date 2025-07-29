import React from 'react'
import { Autocomplete, AutocompleteItem, Button } from '@heroui/react'
import {DatePicker} from "@heroui/react";
import {TimeInput} from "@heroui/react";
const FindPlace = () => {
  return (
    <section className='container mx-auto overflow-x-hidden -mt-60 md:mt-4' >
        <h2 className='text-center'>Find the best places to eat and drink for any occasion</h2>
        <div className='bg-[#FBFCFF] w-full lg:w-[85%] gap-10 h-auto lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl'>
                    <div className='grid lg:grid-cols-6 grid-cols-1 gap-2'>
                        <div>
                            <Autocomplete labelPlacement='outside' label="Locarion" placeholder='Location' className='w-[100%] '>

                                <AutocompleteItem value="nextgen programmer">
                                    nextgen programmer
                                </AutocompleteItem>
                            </Autocomplete>
                        </div>
                        <div>
                            <DatePicker className="max-w-[284px]" label="Birth date" labelPlacement='outside' />
                        </div>
                        <div>
                            <TimeInput label="Event Time" labelPlacement='outside' />
                        </div>
                        <div>
                            <Autocomplete labelPlacement='outside' label="Cuisine" placeholder='Cuisine' className='w-[100%] '>

                                <AutocompleteItem value="nextgen programmer">
                                    nextgen programmer
                                </AutocompleteItem>
                            </Autocomplete>
                        </div>
                        <div>
                            <Autocomplete labelPlacement='outside' label="People" placeholder='2' className='w-[100%] '>

                                <AutocompleteItem value="nextgen programmer">
                                    nextgen programmer
                                </AutocompleteItem>
                            </Autocomplete>
                        </div>
                        <Button className='w-full px-6 py-5 mt-5.5' color='primary'>Search</Button>

                    </div>

                </div>
    </section>
  )
}

export default FindPlace