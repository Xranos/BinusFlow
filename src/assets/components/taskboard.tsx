type Props = {
    title?: React.ReactNode;
    Icon?: React.ReactNode;
};


function Taskboard({ title = "TaskBoard", Icon }: Props) {
    return (
        <div className="bg-white h-192 w-full rounded-2xl flex flex-col items-center  ">
            <div className="flex text-[#001BB7] gap-5 p-5 items-center ">
                <span className="text-4xl text-black">
                    {Icon}
                </span>
                <span className="text-3xl " >{title}</span>
            </div>
        </div>
    )
}

export default Taskboard