import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Post = () => {
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        fetchdata()
    }, [id])
    const [data, setdata] = useState([])
    function fetchdata() {
        fetch(`http://localhost:3004/notes/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setdata(res);
                console.log(res);
            });
    }

    return (
        <>
            <div class="border-solid border-2 border-sky-500 p-5 ">
                <div class="flex items-center">
                    <p class='text-xl mx-8'>{id}</p>
                    <div>
                        <p>Notes :- {data.notes}</p>
                        <p>Description :- {data.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post