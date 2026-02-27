"use client";

import { GoeyToaster } from "goey-toast";
import "goey-toast/styles.css";

export function Toaster() {
	return <GoeyToaster position="top-center" theme="dark" />;
}
