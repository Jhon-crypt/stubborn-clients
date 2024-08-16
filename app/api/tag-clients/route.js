import { NextResponse } from "next/server";
import sanitizeInput from "@/app/utils/sanitizeInputs";
import { headers } from 'next/headers';
import supabase from "@/app/utils/supabase";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {

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
        };

        async function imageDataURLToBlob(dataURL) {
            const response = await fetch(dataURL);
            const blob = await response.blob();
            return blob;
        }

        async function storeTagInSupabase(tag_id, creator, client, complain, images) {
            try {
                const { error } = await supabase
                    .from("tags")
                    .insert({
                        "tag_id": tag_id,
                        "creator": creator,
                        "client": client,
                        "complain": complain,
                        "images": images
                    });

                if (error) {
                    return { message: error.message, status: 500 }; // Ensure the error message is serializable
                } else {
                    const upload = await uploadImageToSupabase(images, tag_id);
                    return upload; // Return the result of the upload operation
                }
            } catch (error) {
                return { message: error.message, status: 500 }; // Ensure the error message is serializable
            }
        }

        async function uploadImageToSupabase(images, tag_id) {
            const uploadResults = [];

            try {
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    const blob = await imageDataURLToBlob(image);
                    const { data, error } = await supabase.storage
                        .from('proofs')
                        .upload(`${tag_id}/${uuidv4()}`, blob, {
                            cacheControl: '3600',
                            upsert: false,
                        });

                    if (error) {
                        console.log(error);
                        uploadResults.push({ message: "Image upload failed", status: 500 });
                    } else {
                        uploadResults.push({ message: data, status: 200 });
                    }
                }
                console.log(uploadResults)
                return { message: "Images processed", status: 200 };

            } catch (error) {
                return { message: "Could not upload images to supabase", status: 500 }; // Ensure the error message is serializable
            }
        }

        const run_functions = await storeTagInSupabase(
            uuidv4(),
            sanitized_inputs.creator,
            sanitized_inputs.client,
            sanitized_inputs.complain,
            request.images
        );

        return NextResponse.json(run_functions, { status: run_functions.status });

    } else {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}
