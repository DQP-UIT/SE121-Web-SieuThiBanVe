import React from "react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'

const HouseSearchBar = ({ listofkind, listofflr, listoflength, listofwidth }) => {
    const [kindofhouse, setkindofhouse] = useState("");
    const [numberofflr, setnumberofflr] = useState("");
    const [length, setlength] = useState("");
    const [width, setwidth] = useState("");


    return (
        <div className=" w-1/2 max-h-fit flex flex-row border-dashed ">
            <div className="basis-1/5">
                <Combobox>

                </Combobox>
            </div>
            <div className="basis-1/5">
                <Combobox>

                </Combobox>
            </div>
            <div className="basis-1/5">
                <Combobox>

                </Combobox>
            </div>
            <div className="basis-1/5">
                <Combobox>

                </Combobox>
            </div>
            <div className="grow">

            </div>
        </div>
    )
}

export default HouseSearchBar;