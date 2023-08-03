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
      <h1>GO Books!</h1>
      {allBooks.map((book: Book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </main>
  );
}
