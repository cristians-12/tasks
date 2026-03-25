"use client"

import { createClient } from "@/utils/supabase/client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { LoginUser } from "@/actions/login"
import CustomInput from "./custom-input"

export default function LoginForm() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const login = async () => {
        // try {
        //     const supabase = createClient();
        //     const { data, error } = await supabase.auth.signInWithPassword({
        //         email: user.email,
        //         password: user.password
        //     })

        //     if (error) throw error
        //     if (data) {
        //         router.push('/dashboard')
        //     }
        // } catch (error) {
        //     console.error(error)
        // }

        LoginUser(user.email, user.password);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            login()
        }}
            className="flex flex-col w-full max-w-sm"
        >
            <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="text"
                placeholder="Ingresa tu email"
                className="p-2 mb-4 border rounded"
            />
            {/* <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Ingresa tu contraseña"
                className="p-2 mb-4 border rounded"
            /> */}
            <CustomInput
                placeholder={'Ingresa contrase'}
                onChange={(yuca) => setUser({ ...user, password: yuca })}
                secure
            />
            <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Iniciar sesion
            </button>
        </form>
    )
}
