import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getUsername = async ():Promise<string> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    
    let { data: users, error } = await supabase
        .from('users')
        .select('full_name')


    if (error) {
        console.log(error);
    }

    return ( users as any ) || [];
}

export default getUsername;