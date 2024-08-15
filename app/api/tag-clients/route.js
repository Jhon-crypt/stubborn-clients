import { NextResponse } from "next/server";
import sanitizeInput from "@/app/utils/sanitizeInputs";
import { headers } from 'next/headers';
import supabase from "@/app/utils/supabase";

export async function POST(req){

    // Retrieve the headers from the incoming request
    const headersInstance = headers();

    // Extract the 'authorization' header from the request headers
    const authorization = headersInstance.get('authorization');

    // Split the 'authorization' header to separate the Bearer token
    const splited_authorization = authorization.split("Bearer ");

    // Retrieve the Bearer token from the split result
    const bearer_token = splited_authorization[1];

    // Check if the Bearer token matches the expected value from the environment variables
    if (bearer_token === process.env.API_BEARER_KEY) {

        const request = await req.json();
        
        if (!request.creator || !request.client || !request.complain || !request.images) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const sanitized_inputs = {
            creator: sanitizeInput(request.creator),
            client: sanitizeInput(request.client),
            complain: sanitizeInput(request.complain),
        }

        async function imageDataURLToBlob(dataURL) {
            const response = await fetch(dataURL);
            const blob = await response.blob();
            return blob;
        }

        async function storeTagInSupabase(creator, client, complain){

            try {

                const { error } = await supabase
                    .from("tags")
                    .insert({
                        //"tag_id": user_id,
                        "creator": creator,
                        "client": client,
                        "complain": complain,
                        //"images": ""
                    });
                if (error) {
                    return { message: error, status: 500 };
                } else {
                    return { message : "Tag Created, also check on X"};
                }
            }catch(error){

                return { message: error, status: 500 };

            }

        }

        const run_functions = await storeTagInSupabase(sanitized_inputs.creator, sanitized_inputs.client, sanitized_inputs.complain)
        return NextResponse.json(run_functions, { status: 200 })


    }

}