import React from 'react'
import Template from './Template'
import Link from 'next/link'

interface JoinProps {

}

function JoinComponent() {
    return (
        <Template>
            <form className='flex flex-col bg-white rounded-md shadow-sm p-4 relative' style={{ width: '400px', height: '600px' }}>
                <h2 className=' text-3xl font-extrabold text-center mb-3'>Registrarse</h2>
                <div className='block mb-6'>
                    <label htmlFor='name'>
                        Nombre
                    </label>
                    <input type="text" name="name" id="name" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2' />
                </div>
                <div className='block mb-6'>
                    <label htmlFor='name'>
                        Apellido
                    </label>
                    <input type="text" name="name" id="name" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2' />
                </div>
                <div className='block mb-6'>
                    <label htmlFor='name'>
                        Edad
                    </label>
                    <input type="date" name="name" id="name" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2' />
                </div>
                <div className='block mb-6'>
                    <label htmlFor='user'>
                        Usuario
                    </label>
                    <input type="text" name="user" id="user" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2' />
                </div>
                <div className='block mb-6'>
                    <label htmlFor='pass'>
                        Contraseña
                    </label>
                    <input type="password" name="pass" id="pass" className='w-full outline-none border-2 border-b-yellow-300 rounded-md pl-2' />
                </div>
                <button className=' w-40 h-10 bg-yellow-300 rounded-md my-0 mx-auto'>Unirse</button>
                <p className='text-center absolute bottom-2 left-24'>¿Ya tienes cuenta? <Link href="access" className=' text-blue-500'>Ingresa</Link></p>
            </form>
        </Template>
    )
}

export default JoinComponent