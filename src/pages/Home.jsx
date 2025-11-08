import axios from "axios"
import { useState } from "react"

export default function Home() {
    const [session, setSession] = useState(null)

    // a function to create the sessions in the db
    async function startSession() {
        try {
            const res = await axios.post('https://live-session-app-tutorarc-assignment.onrender.com/api/session')
            const data = res.data
            // console.log('session data :', data.session.userurl)
            setSession(data?.session)
        } catch (error) {
            console.error('Something went wrong when fetching the data :', error)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-r from-pink-500 via-red-500 to-orange-500 ">
            {!session ? (
                <button
                    onClick={startSession}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                    START SESSION
                </button>
            ) : (
                <div className="text-center">
                    <p className="text-xl font-semibold mb-2">Session Started!</p>
                    <a
                        href={`https://live-session-app-tutor-arc-assignme-seven.vercel.app/session.userurl`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                    >
                        Share this link with student
                    </a>

                    <div className="mt-5">
                        <video
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            controls
                            className="rounded-lg shadow-lg w-[600px]"
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
