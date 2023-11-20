import { FlagIcon, HeartIcon, ListBulletIcon, BellIcon, Cog6ToothIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface LeftBarProps {
    usuario: Record<string, any>,
    shortcuts: Array<BarOption>
}

interface BarOption {
    icon: React.ReactNode,
    text: string,
    path: string
}

const LeftBarComponent = () => {
  return (
    <section className='flex flex-col w-72 text-blue-700 h-full relative p-6'>
    <span className=' flex flex-col items-center mb-20'>
        <figure className=' rounded-full bg-black w-16 h-16 overflow-hidden mb-2 cursor-pointer'></figure>
        <p className=' cursor-default'>Nombre Completo</p>
        <p className=' cursor-default'>Usuario</p>
    </span>
    <span className='flex flex-col gap-3'>
        <span className='flex items-center cursor-pointer hover:bg-gray-200 px-6 py-2 rounded-md'>
            <FlagIcon className='icon mr-3'/>
            <p className=' uppercase text-sm'>Ver Torneos</p>
        </span>
        <span className='flex items-center cursor-pointer hover:bg-gray-200 px-6 py-2 rounded-md'>
            <HeartIcon className='icon mr-3'/>
            <p className=' uppercase text-sm'>Favoritos</p>
        </span>
        <span className='flex items-center cursor-pointer hover:bg-gray-200 px-6 py-2 rounded-md'>
            <ListBulletIcon className='icon mr-3'/>
            <p className=' uppercase text-sm'>Historial</p>
        </span>
        <span className='flex items-center cursor-pointer hover:bg-gray-200 px-6 py-2 rounded-md'>
            <BellIcon className='icon mr-3'/>
            <p className=' uppercase text-sm'>Notificaciones</p>
        </span>
        <span className='flex items-center cursor-pointer hover:bg-gray-200 px-6 py-2 rounded-md'>
            <Cog6ToothIcon className='icon mr-3'/>
            <p className=' uppercase text-sm'>Configuracion</p>
        </span>
    </span>
    <span className='flex items-center cursor-pointer hover:bg-gray-200 px-6 py-2 rounded-md absolute bottom-6 text-yellow-700 w-[240px]'>
            <ArrowLeftCircleIcon className='icon mr-3'/>
            <p className=' uppercase text-sm'>Cerrar Sesion</p>
    </span>
</section>
  )
}

export default LeftBarComponent