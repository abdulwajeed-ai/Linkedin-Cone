import React from 'react'
import ProfileCard from '../../components/profileCard/profileCard'

const Feeds = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
      {/* left side  */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
          <div className='h-fit'>
            <ProfileCard/>
          </div>
      </div>
      {/* middle side */}
      <div>

      </div>
      {/* right side */}
      <div>

      </div>
    </div>
  )
}

export default Feeds