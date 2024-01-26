import React, { useEffect } from 'react'

const Username = () => {
  const [greeting, setGreeting] = React.useState('')
  

  useEffect(()  => {
   
      const time = new Date();
      let hour = time.getHours();

      if(hour < 12 ){
          setGreeting('Good Morning')
      }
      else if(hour >= 12 && hour < 18){
        setGreeting('Good Afternoon')
      }
      else{
        setGreeting('Good Evening')
      }
      
  }, [])
  
  return (
    <div className='flex justify-center items-center h-full'>
        <h1 className='text-xs md:text-lg font-bold'>{greeting},</h1>
        <h1 className="text-pink-500 font-bold px-2">Ayomide</h1>
    </div>
  )
}

export default Username;