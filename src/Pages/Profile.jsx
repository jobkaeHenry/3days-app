import React from 'react'
import { useRecoilState } from 'recoil'
import { dateState } from '../Recoil/atoms/atom'


const Profile = () => {
const [date,setDate]=useRecoilState(dateState)

  return (
    <div>{date}</div>
  )
}

export default Profile