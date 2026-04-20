import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] w-full overflow-x-auto flex items-center justify-start flex-nowrap gap-5 py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[250px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4>20 feb 2026</h4>
            </div>
            <h2>Make a youtube video </h2>
        </div>
        
    </div>
  )
}

export default TaskList