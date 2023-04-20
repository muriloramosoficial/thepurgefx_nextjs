interface CardProps {
    icon: JSX.Element;
    variavel: JSX.Element;
    description: string;
    classNameVariavel: string;
    classNameDescription: string;
}

const Card = ({ icon, variavel, description, classNameVariavel, classNameDescription }: CardProps) => {
    return (
        <>
            <div className="flex mr-5 items-center justify-center">
                {icon}
            </div>
            <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-end items-end align-middle" id="group">
                    {/* <div id="result"><span className="text-2xl font-bold text-green-500">{variavel}</span></div>
                    <div id="title"><span className="text-sm font-semibold text-slate-400">{description}</span></div> */}
                    <div id="result"><span className={`${classNameVariavel}`}>{variavel}</span></div>
                    <div id="title"><span className={`${classNameDescription}`}>{description}</span></div>
                </div>
            </div>
        </>
    )
}

export default Card;