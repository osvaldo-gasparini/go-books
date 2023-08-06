import styles from "./page.module.css";
export default function Home() {
  const books = {
    relations: [],
  };

  interface Book {
    title: string;
    author: string;
    id: string;
  }

  const allBooks = [
    {
      title: "How to gain friends and influence people",
      author: "Dale Carnegie",
      id: "1",
    },
    {
      title: "Can't hurt me",
      author: "David Goggins",
      id: "2",
    },
    {
      title: "Think and grow rich",
      author: "Napoleon Hill",
      id: "3",
    },
    {
      title: "The 5AM Club",
      author: "Robin Sharma",
      id: "4",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <article className={styles.welcome}>
          <h2>Welcome!</h2>
          <p>
            Taking into account these words and that many books are the
            experience of entire lives focused on a specific objective, who had
            the generosity to share it with the world, why not take that
            opportunity?
          </p>
          <p>
            This site is my way of sharing the books that I consider have
            contributed the most to my personal development.
          </p>
        </article>
        <article className={styles.quoteJim}>
          <p>
            &quot;Your level of success will rarely exceed your level of
            personal development.&quot;
          </p>
          <p className={styles.author}>- Jim Rohn</p>
        </article>
      </section>

      <section className={styles.booksMap}>
        {allBooks.map((book: Book) => (
          <div key={book.id} className={styles.bookCard}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
