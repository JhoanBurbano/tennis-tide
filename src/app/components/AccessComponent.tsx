import React from 'react'
import Template from './Template'
import Link from 'next/link'

interface AccessProps {

}

function AccessComponent() {
  return (
    <Template>
      <form className='flex flex-col bg-white rounded-md shadow-sm p-4 relative' style={{ width: '400px', height: '600px' }}>
        <h2 className=' text-3xl font-extrabold text-center mb-3'>Iniciar Sesion</h2>
        <div className='block mb-6'>
        <label htmlFor='user'>
          Usuario
        </label>
        <input type="text" name="user" id="user" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2'/>
        </div>
        <div className='block mb-6'>
        <label htmlFor='pass'>
          Contraseña
        </label>
        <input type="password" name="pass" id="pass" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2'/>
        </div>
        <button className=' w-40 h-10 bg-yellow-300 rounded-md my-0 mx-auto'>Ingresar</button>
        <p className='text-center absolute bottom-2 left-24'>¿No tienes cuenta? <Link href="register" className=' text-blue-500'>Únete</Link></p>
      </form>
    </Template>
  )
}

export default AccessComponent