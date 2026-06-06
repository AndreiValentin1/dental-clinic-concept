import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-dental-blue-dark">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-dental-blue-dark px-5 py-3 text-sm font-semibold text-white"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;