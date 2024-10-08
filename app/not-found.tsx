import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-auto w-11/12 mb-10">
      <h1 className="p-6 md:p-16 text-3xl text-gray-800 font-extrabold text-center">
        Erreur 404
      </h1>
      <div className="flex justify-center">
        <Image
          src="/404.gif"
          width={250}
          height={250}
          alt="404 Error GIF"
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/"
          className="inline-block rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center font-bold text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          RENTRER A LA MAISON
        </Link>
      </div>
    </div>
  );
}
