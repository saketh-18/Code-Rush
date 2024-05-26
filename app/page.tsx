import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-1 flex h-16 w-full flex-col items-center bg-primary-100">
      <h1 className="h1-bold text-primary-500">NextJS 13 we are coming</h1>
      <Link href="/sign-in">Sign - In</Link>
      <Link href="/sign-up">Sign - up</Link>
    </div>
  );
}
