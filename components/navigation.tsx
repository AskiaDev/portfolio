"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#experience", label: "Experience" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-lg border-b border-border"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<a
						href="#about"
						className="text-xl font-bold text-foreground hover:text-primary transition-colors"
					>
						askiadev.
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
							>
								{link.label}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-border">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
