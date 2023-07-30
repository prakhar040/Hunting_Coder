import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full ">
        <h1 className=' text-4xl'>Hunting Coder</h1><br />
        <p>A blog for hunting coders by a hunting coder</p>
      </div>

      
    </main>
  )
}
