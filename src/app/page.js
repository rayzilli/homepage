import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  mt-24 p-6 gap-2" >
   
      <div className="relative flex place-items-center blur-sm  brightness:-110 hover:filter-none ease-in duration-300">
        <Image
          src="/images/enter.jpeg"
          alt="email me"
          width={300}
          height={200}
          priority
        />
      </div>
     
     <div className='flex items-center animation-pulse font-mono text-slate-600 dark:text-slate-400'>
      <a href='mailto:hello@rayzilli.com'>hello@rayzilli.com</a>
     </div>
     
    </main>
  )
}
