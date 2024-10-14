import Image from 'next/image'
import Navbar from '@components/common/Navbar/Navbar'

export default function Home() {
  return (
    <div className='px-5 max-w-[1280px] mx-auto'>
      <Navbar />
    </div>
  )
}