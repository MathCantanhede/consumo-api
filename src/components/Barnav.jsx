import {Link} from 'react-router-dom'
function Barnav(){
    return(
        <div className='flex justify-between items-center w-[50%]  m-auto'>
            <Link to='Home' className='space-between text-white bg-[#5a9b95] w-[120px] rounded-md hover:bg-[#44878f] hover:text-black'> Home</Link>
            <Link to='Pokemons' className='space-between text-white bg-[#5a9b95] w-[120px] rounded-md hover:bg-[#44878f] hover:text-black'>Pokemons</Link>
            <Link to='Cadastro' className='space-between text-white bg-[#5a9b95] w-[120px] rounded-md hover:bg-[#44878f] hover:text-black'>Cadastro</Link>
        </div>
    )
}
export default Barnav;