"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function UserLogin() {
	const { user } = useUser();

	console.log("🚀 ~ UserLogin ~ user:", user);
	return (
		<div>
			<h1>Client Component</h1>
			<div>
				<Link href='/api/auth/login'>Login</Link>
				{user ? (
					<>
						<h2>{`Hello User: ${user.name}`}</h2>
						<Link href='api/auth/logout'>LOGOUT</Link>
					</>
				) : null}
			</div>
		</div>
	);
}
