import React from "react";
import Image from "next/image";

const Star = ({ className = "" }) => (
    <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="m12 2.5 2.94 5.95 6.56.95-4.75 4.63 1.12 6.53L12 17.48l-5.87 3.08 1.12-6.53L2.5 9.4l6.56-.95L12 2.5Z" />
    </svg>
);

const BookOpen = ({ className = "" }) => (
    <svg
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H11v18H4.5A2.5 2.5 0 0 0 2 22V4.5Z" />
        <path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H13v18h6.5A2.5 2.5 0 0 1 22 22V4.5Z" />
    </svg>
);

const CalendarDays = ({ className = "" }) => (
    <svg
        aria-hidden="true"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
    >
        <rect height="18" rx="2" width="18" x="3" y="4" />
        <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
);

type Book = {
    image: string;
    bookName: string;
    category: string;
    rating: number;
    author: string;
    tags: string[];
    totalPages: number;
    yearOfPublishing: number;
    publisher: string;
};

const BookCard = ({ book }: { book: Book }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                        {book.category}
                    </span>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gray-900/80 px-3 py-1.5 text-sm font-semibold text-white">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {book.rating}
                </div>
            </div>

            <div className="space-y-4 p-5">
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
                        {book.bookName}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        by{" "}
                        <span className="font-medium text-gray-700">
                            {book.author}
                        </span>
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3 border-y border-gray-100 py-3">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-emerald-600" />

                        <div>
                            <p className="text-xs text-gray-400">Pages</p>
                            <p className="text-sm font-semibold text-gray-700">
                                {book.totalPages}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-emerald-600" />

                        <div>
                            <p className="text-xs text-gray-400">Published</p>
                            <p className="text-sm font-semibold text-gray-700">
                                {book.yearOfPublishing}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                        <p className="text-xs text-gray-400">Publisher</p>

                        <p className="truncate text-sm font-medium text-gray-700">
                            {book.publisher}
                        </p>
                    </div>

                    <button className="btn btn-sm shrink-0 border-none bg-emerald-600 px-4 text-white hover:bg-emerald-700">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;

