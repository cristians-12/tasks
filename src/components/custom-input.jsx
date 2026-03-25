"use client"
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function CustomInput({ secure, onChange, placeholder }) {

    const [mostrar, setMostrar] = useState(false);

    const alternateEyes = () => {
        if (mostrar) {
            return <FaRegEye />
        } else {
            return <FaRegEyeSlash />
        }
    }

    const toggleVisibility = () => {
        setMostrar(!mostrar);
    }

    return (
        <div className="border rounded p-2 flex items-center justify-between">
            <input
            placeholder={placeholder}
                className="focus:outline-none w-[90%]"
                onChange={(e) => onChange(e.target.value)} type={mostrar ? "text" : "password"}
            />
            {
                secure
                    ? <div onClick={toggleVisibility}>{alternateEyes()}</div>
                    : null
            }
        </div>
    )
}