import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-100">
                    <div className="grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-12 md:py-14 lg:px-16 lg:py-16">

                        <div className="relative z-10 space-y-6">
                            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                Discover Your Next Favorite Book
                            </span>

                            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                                Fresh Reads for
                                <span className="block text-emerald-600">
                                    Your Bookshelf
                                </span>
                            </h1>

                            <p className="max-w-lg text-base leading-7 text-gray-600 md:text-lg">
                                Explore inspiring stories, timeless classics, and
                                exciting new releases carefully selected for every
                                kind of reader.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button className="btn border-none bg-emerald-600 px-6 text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700">
                                    View The List
                                </button>

                                <button className="btn btn-outline border-gray-300 px-6 text-gray-700 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700">
                                    Explore Categories
                                </button>
                            </div>
                        </div>

                        <div className="relative flex justify-center md:justify-end">
                            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-200/50 blur-2xl" />
                            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-yellow-200/50 blur-2xl" />

                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={bannerImg}
                                    alt="Books on a bookshelf"
                                    className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                                    priority
                                />
                            </div>
                        </div>

                    </div>

                    <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
