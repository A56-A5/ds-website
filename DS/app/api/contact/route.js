import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // TODO: Add your email sending logic here
    console.log("Received contact form submission:", { name, email, subject, message })

    // For now, we'll just simulate a successful response
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
