import { useState } from "react"

import { IoMdAdd } from "react-icons/io";

function ConfigPage() {
    return (
        <div className="px-10 pt-5">
            <div className="bg-[#F5F1DC] rounded-2xl flex items-start justify-start">
                <div className="flex flex-col p-7 gap-5">
                    <h1 className="text-[#F5F1DC] text-5xl bg-[#FF8040] rounded-md p-5 w-fit ">
                        This is configuration page
                    </h1>
                    <div className="pl-4 flex flex-col gap-3">
                        <h2 className="text-[#535353] text-3xl pt-5 ">
                            Color List
                        </h2>
                        <div className="bg-[#FF8040] h-[635px] w-225 rounded-md px-8 pt-15 ">
                            <div className="grid grid-cols-8 gap-4">
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigPage