import { supabase } from "../../../supabase";

export default async function getAllProfile(req, res) {
    const { data, error } = await supabase.from("profile").select("*");
    if (error) {
        res.status(500).json({ data: null, error: error.message });
    }
    res.status(200).json({ data, error: null });
}
