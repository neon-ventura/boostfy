import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, description, status, priority } = await req.json();

    const listId = "901107866463";
    const authorization = "pk_158659484_FYZ66BTUH9NE3JIUI442SC0IMSZ0256A"
    const url = `https://api.clickup.com/api/v2/list/${listId}/task`;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        name,
        description,
        status,
        priority,
      }),
    };

    const response = await fetch(url, options)
    const data = await response.json()
    return NextResponse.json({ message: "Task created successfully", data });
}