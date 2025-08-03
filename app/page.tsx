import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex mx-auto min-h-screen">
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </div>
  );
}
