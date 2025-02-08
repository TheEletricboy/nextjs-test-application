import UserLogin from "@/components/userLogin/UserLogin";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>Hello World.</main>
			<UserLogin />
		</div>
	);
}
