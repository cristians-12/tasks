"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

export const LoginUser = async (email, password) => {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase.auth.signInWithPassword({email, password});

        // const access_token = data.session.access_token;

        console.log(data);

        if (error) throw error;

        redirect('/dashboard')

    } catch (error) {
        console.error(error);
    }
}