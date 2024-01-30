import styles from './page.module.scss';
import { SearchSection } from './components/search-section/search-section';

export default async function Index() {
  return (
    <main className={styles.page}>
      <h1>Welcome to Steam Game Library Analyser</h1>

      <SearchSection />
    </main>
  );
}
