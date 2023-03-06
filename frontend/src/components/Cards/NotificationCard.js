import React from 'react'

function NotificationCard({data}) {
  return (
    <div className='bg-[#0c1427] w-[25rem] text-center rounded-md py-8 m-6'>
        <img src={data.icon} alt='notification' className='w-20 h-20 rounded-full mx-auto'/>
        <h1 className='text-4xl font-bold '>{(data.notification.title).slice(9)}</h1>
        <h3 className='text-2xl mt-6'>{(data.notification.body)} </h3>
    </div>
  )
}

export default NotificationCard