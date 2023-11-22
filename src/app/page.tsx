import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
 return (
  <div className=" flex justify-center items-center h-full" style={{height: '100vh'}}>
    <figure className="c z-10 bg-white p-20 shadow-md rounded-lg">
      <Image src="https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/tenistide/tt-blue.png" style={{filter: 'drop-shadow(4px 4px 0px #ffff27)'}}  alt="logo" className='w-40 block mb-6' width="160" height="160" />
      <p className=" font-extrabold text-white text-3xl mb-6" style={{textShadow: `3px 3px 2px #000, 0 0 2px #000`, userSelect: 'none'}}>Tenis Tide</p>
      <Link href={'access'} className='flex'>
        <button className=' bg-[#ffff27] w-40 h-10 rounded-md m-auto shadow-xl'>Access</button>
      </Link>
    </figure>
  </div>
 )
}