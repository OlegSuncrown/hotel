import React, {useContext} from 'react'
import {RoomContext} from '../context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'
function RoomContainer() {
  const {sortedRooms, loading}= useContext(RoomContext)
  if(loading){
    return <Loading />
  }
  return (
    <div>
      <RoomFilter />
      <RoomList rooms={sortedRooms}/>
    </div>
  )
}

export default RoomContainer
