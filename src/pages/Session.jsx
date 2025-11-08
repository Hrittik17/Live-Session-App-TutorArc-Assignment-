import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Session() {
    const { id } = useParams();
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(true);

    // checking if the sessions are valid or not 
    useEffect(() => {
        async function checkSession() {
            try {
                const res = await axios.get(`https://live-session-app-tutorarc-assignment.onrender.com/api/session/${id}`);
                if (res.data) setValid(true);
            } catch {
                setValid(false);
            } finally {
                setLoading(false);
            }
        }
        checkSession();
    }, [id]);


    if (loading)
        return <p className="text-center mt-20 text-gray-200">Verifying session...</p>;


    if (!valid)
        return <p className="text-center mt-20 text-red-500">Invalid or expired session link.</p>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-r from-gray-700 via-rose-500 to-orange-400">
            <h1 className="text-center text-white text-4xl font-bold mb-4">Live Session</h1>

            <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                controls
                controlsList="nodownload"
                className="rounded-lg shadow-lg w-[600px]"
                playbackRates={[0.5, 1, 1.5, 2]}
            />
        </div>
    )
}
