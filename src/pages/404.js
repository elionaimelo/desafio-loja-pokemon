import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1>404 - Página não encontrada</h1>
      <Link href="/">
        <a className="bg-blue-600 px-4 py-2 text-white rounded-sm mt-4">
          Voltar para home
        </a>
      </Link>
    </div>
  );
}
