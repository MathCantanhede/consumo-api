import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const Schema =z.object({
       Name: z.string()
    .min(5,'Nome Inválido'),
       Age: z.number()
    .min(5, "Idade Mínima 5")
    .max(10, "Idade máxima de 10 anos"),
       points: z.number()
       .min(2, 'Mínimo de 2 pontos de vida')
    .max(5,'Máximo de pontos de vida são 4')
});
function Cadastro(){
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(Schema)
    }) 
    const createUser=(data)=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(createUser)} className=" border-white border w-[60%] m-auto mt-[100px] h-[350px]">
            <div className="flex flex-col w-[80%] m-auto rounded p-3">
                <label className="flex w-[200px]">Name</label>
                <input
                className='border border-black rounded-xl'
                {...register('Name')}
                />
                {errors.Name && <p className='text-red-600'>{errors.Name.message}</p>}
            </div>
            
            <div className="flex flex-col w-[80%] m-auto p-3">
                <label className=" flex ">Age</label>
                <input
                className='border border-black rounded-xl'
                {...register('Age',{valueAsNumber: true })}
                />
                {errors.Age && <p className='text-red-600'>{errors.Age.message}</p>}
                
            </div>
            <div className="flex flex-col w-[80%] m-auto p-3">
                <label className=" flex ">points</label>
                <input
                className='border border-black rounded-xl'
                {...register('points',{valueAsNumber: true })}
                />
                {errors.points && <p className='text-red-600'>{errors.points.message}</p>}
            </div>
            <div>
                <button className='bg-[#44878f] w-[100px] rounded-md' type='submit'>Enviar</button>
            </div>
        </form>
    )
}
export default Cadastro