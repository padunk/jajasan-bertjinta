import { createClient } from "@supabase/supabase-js";

export default function createProfile(req, res) {
    const create = async () => {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SECRET_KEY
        );
        try {
            const data = await supabase
                .from("profile")
                .insert([JSON.parse(req.body)])
                .single();
            res.status(200).json({ data, error: null });
        } catch (error) {
            res.status(500).json({ data: null, error: error.message });
        }
    };
    create();
}
