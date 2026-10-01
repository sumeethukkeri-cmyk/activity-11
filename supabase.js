import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vcnfljptbplrmvrqhsug.supabase.co";
const supabaseKey = "sb_publishable_IQAl0D1M22cFw3A1-ueISQ_my8AOPNT";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
