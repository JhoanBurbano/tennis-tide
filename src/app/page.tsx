import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
 return (
  <div className=" flex justify-center items-center h-full" style={{height: '100vh'}}>
    <Image className=" absolute z-0 h-full w-full" src="https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/tenistide/bg-tt.png" alt="" />
    <figure className="c z-10 bg-white p-20 shadow-lg rounded-lg">
      <Image src="https://burbanostudio-assets.s3.us-east-2.amazonaws.com/projects/tenistide/tt-blue.png" style={{filter: 'drop-shadow(4px 4px 0px #ffff00)'}}  alt="logo" className='w-40 block mb-6' />
      <p className=" font-extrabold text-white text-3xl mb-6" style={{textShadow: `3px 3px 2px #000, 0 0 2px #000`, userSelect: 'none'}}>Tenis Tide</p>
      <Link href={'access'} className='flex'>
        <button className=' bg-yellow-300 w-40 h-10 rounded-md m-auto shadow-xl'>Access</button>
      </Link>
    </figure>
  </div>
 )
}