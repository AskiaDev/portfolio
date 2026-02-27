import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { name, email, subject, message } = await request.json();

		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: "All fields are required" },
				{ status: 400 }
			);
		}

		// TODO: Replace with actual email service (e.g., Resend, SendGrid)
		// For now, simulate sending
		await new Promise((resolve) => setTimeout(resolve, 1500));

		return NextResponse.json({ success: true });
	} catch {
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
