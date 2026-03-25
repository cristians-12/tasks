"use client"
import { createClient } from "@/utils/supabase/client";
import { useState } from "react"

export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const supabase = createClient();
            const { data: userData } = await supabase.auth.getUser();

            const { data, error } = await supabase.from('tasks')
                .insert({
                    title: task.title,
                    description: task.description,
                    user_id: userData.user.id,
                });
            if (error) throw error;
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form >
            <input type="text" placeholder="Titulo de la tarea" onChange={(e) => setTask({ ...task, title: e.target.value })} />
            <input type="text" placeholder="Descripcion de tarea" onChange={(e) => setTask({ ...task, description: e.target.value })} />
            <button onClick={handleSubmit}>Registrar tarea</button>
        </form>
    )
}