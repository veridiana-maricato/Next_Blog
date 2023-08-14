import styles from './styles.module.css'

export default function abraselLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>abrasel layout</nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
