import emailjs from "@emailjs/browser";

export const sendEmail = async (email: string, body: string) => {
	try {
		await emailjs.send(
			process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
			process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
			{
				email: email,
				message: body,
			},
			process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || "",
		);
	} catch (error) {
		console.error(error);
		throw error;
	}
};
