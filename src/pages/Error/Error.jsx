
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div  className='h-[100vh] w-full text-white bg-black flex flex-col items-center justify-center '>
        <h1 className='text-3xl lg:text-6xl'>404 Error page not found</h1>

        <button onClick={()=>navigate('/')} className='bg-blue-600 py-4 px-8 text-teal-50 font-bold text-xl mt-8 rounded-xl cursor-pointer'>Home</button>
        
      </div>
     
    </div>
    
    
  )
}

export default Error