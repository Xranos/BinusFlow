function ConfigPage() {
    return (
        <div className="p-10 pt-5">
            <div className="bg-[#F5F1DC] rounded-2xl h-212 flex items-start justify-start">
                <div className="flex flex-col p-7 gap-5">
                    <h1 className="text-[#F5F1DC] text-5xl bg-[#FF8040] rounded-md p-5 w-fit ">
                        This is configuration page
                    </h1>
                    <div className="pl-4 flex flex-col gap-3">
                        <h2 className="text-[#535353] text-3xl pt-5 ">
                            Color List
                        </h2>
                        <div className="bg-[#FF8040] h-150 w-225 rounded-md">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigPage