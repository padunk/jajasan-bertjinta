import { supabase } from "../../../../supabase";

export default async function getAvatar(req, res) {
    const { data, error } = await supabase.storage
        .from("avatars")
        .getPublicUrl(`${req.query.user}/main_avatar.png`);
    if (error) {
        res.status(500).json({ data: null, error: error.message });
    }
    res.status(200).json({ data, error: null });
}
