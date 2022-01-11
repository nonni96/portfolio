import nonniMynd from './assets/img/nonni.png';

function Header() {
    return(
        <div className='container mx-auto px-4'>
            <div className="grid grid-cols-1 lg:grid-cols-5 py-10">
                <div className='flex items-center justify-center col-span-4'>
                    <h1 className="font-mono text-5xl lg:text-7xl font-bold">Jón Ingimarsson</h1>
                </div>
                <div className='flex items-center justify-center'>
                    <img className="object-contain rounded-full w-1/3 lg:w-full" src={nonniMynd}/>
                </div>
            </div>
        </div>
    )
}

export default Header;