import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-background">
			<div className="flex items-center justify-center min-h-screen">
				<Link href="/sign-in">
					<Button>Sign In</Button>
				</Link>
			</div>
		</main>
	);
}
