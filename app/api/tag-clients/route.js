import { NextResponse } from "next/server";
import { headers } from 'next/headers';

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

        //const request = await req.json();
        return NextResponse.json({ message: "Testing" }, { status: 400 });


    }

}