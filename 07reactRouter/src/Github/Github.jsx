import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
useLoaderData

function Github() {

    const data = useLoaderData()
    // const [data,setdata] = React.useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/Stephen1k')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github: {data.login}
        <img src={data.avatar_url} alt="avatar" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Stephen1k')
}