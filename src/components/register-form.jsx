"use client"

import { createClient } from "@/utils/supabase/client"
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const register = async () => {
        try {
            const supabase = createClient();
            const { data, error } = await supabase.auth.signUp({
                email: user.email,
                password: user.password
            })

            if (error) throw error
            if (data) {
                router.push('/dashboard')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (user.password !== user.confirmPassword) {
                alert("Las contraseñas no coinciden");
                return
            }
            register()
        }}
            className="flex flex-col w-full max-w-sm"
        >
            <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="text"
                placeholder="Ingresa tu email"
                className="p-2 mb-4 border rounded"
            />
            <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Ingresa tu contraseña"
                className="p-2 mb-4 border rounded"
            />
            <input
                onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                type="password"
                placeholder="Ingresa tu contraseña"
                className="p-2 mb-4 border rounded"
            />
            <button
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Registrarse
            </button>
        </form>
    )
}
