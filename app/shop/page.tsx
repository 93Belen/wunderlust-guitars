import Card from "../components/Card";

export default function Popular(){
    return (
        <section className='w-full max-w-[550px] md:max-w-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:w-[100%] lg:max-w-[1250px]'>
            <div className='h-[15rem] lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem] lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem] lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem]  lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem] lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem]  lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem] lg:h-[22rem]'>
                <Card />
            </div>
            <div className='h-[15rem] lg:h-[22rem]'>
                <Card />
            </div>
        </section>
    )
}