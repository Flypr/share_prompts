'use client'; // Error components must be Clinet-side rendered

import { useEffect } from "react";

export const Error = ({ error, reset}) => {
    useEffect(() => {
        console.log(error)
    }, [error]);

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attmpt, to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}