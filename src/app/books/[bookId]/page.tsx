import Image from "next/image";
import React from "react";
import type { IBook } from "@/types/books.types";
import ReadButton from "@/components/bookDetails/ReadButton";

interface IBookDetailPageProps {
    params: {
        bookId: string;
    };
}

const getBooks = async (): Promise<IBook[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");

    if (!res.ok) {
        throw new Error("Failed to fetch books");
    }

    return res.json();
};

const BookDetailPage = async ({ params }: IBookDetailPageProps) => {
    const { bookId } = await params;

    const booksData = await getBooks();

    const book = booksData.find(
        (book) => String(book.bookId) === String(bookId)
    );

    if (!book) {
        return (
            <div className="container mx-auto my-20 px-4 text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    Book Not Found
                </h1>

                <p className="mt-3 text-gray-500">
                    The book you are looking for does not exist.
                </p>
            </div>
        );
    }

    return (
        <section className="container mx-auto my-10 px-4">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                <div className="grid lg:grid-cols-2">

                    <div className="relative min-h-[460px] overflow-hidden bg-gray-100">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center p-7 lg:p-9">
                        <div className="mb-3">
                            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                                {book.category}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            {book.bookName}
                        </h1>

                        <p className="mt-2 text-lg text-gray-500">
                            By{" "}
                            <span className="font-semibold text-gray-800">
                                {book.author}
                            </span>
                        </p>

                        <div className="mt-4 flex items-center gap-2">
                            <span className="text-xl text-yellow-500">
                                ★
                            </span>

                            <span className="text-lg font-semibold text-gray-800">
                                {book.rating}
                            </span>

                            <span className="text-gray-400">
                                / 5.0
                            </span>
                        </div>

                        <p className="mt-5 line-clamp-4 leading-6 text-gray-600">
                            {book.review}
                        </p>

                        <div className="my-5 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-gray-100 py-5">
                            <div>
                                <p className="text-sm text-gray-400">
                                    Pages
                                </p>

                                <p className="mt-1 font-semibold text-gray-800">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Published
                                </p>

                                <p className="mt-1 font-semibold text-gray-800">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Publisher
                                </p>

                                <p className="mt-1 truncate font-semibold text-gray-800">
                                    {book.publisher}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">
                                    Category
                                </p>

                                <p className="mt-1 font-semibold text-gray-800">
                                    {book.category}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <ReadButton book={book}/>

                            <button className="btn btn-info text-white">
                                Wishlist
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BookDetailPage;

