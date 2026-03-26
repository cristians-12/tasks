import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function TaskCard({ task }) {
    const { title, description, image } = task;
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const getUrlImage = async () => {
            const supabase = createClient();
            const { data } = supabase.storage
                .from("archivos")
                .getPublicUrl(image);

            setImageUrl(data.publicUrl);
        };

        if (image) {
            getUrlImage();
        }
    }, [image]);

    return (
        <div>
            <img src={imageUrl} alt={title} />
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
}