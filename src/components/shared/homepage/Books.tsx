import React from "react";
import BookCard from "../BookCard";

const getBooks = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-12 px-4">
            <div className="mb-8 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Explore Our Collection
                </p>

                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Popular Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                    Discover amazing books and find your next favorite read.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {booksData.map((book: React.ComponentProps<typeof BookCard>["book"], index) => (
                    <BookCard
                        key={index}
                        book={book}
                    />
                ))}
            </div>
        </section>
    );
};

export default Books;
