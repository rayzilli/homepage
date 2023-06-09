import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  mt-24 p-6 gap-2" >
   
      <div className="flex place-items-center animate-wiggle">
        <div className="animate-fadeInBlur">

        <Image
          src="/images/enter.jpeg"
          alt="email me"
          width={300}
          height={200}
          priority
        />
      </div>
      </div>
     
     <div className='flex items-center animation-pulse font-mono text-slate-500 dark:text-slate-400'>
      <a href='mailto:hello@rayzilli.com'>hello@rayzilli.com</a>
     </div>
     
    </main>
  )
}
