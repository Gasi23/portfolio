import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl">
        <h1 className="text-4xl font-bold text-center sm:text-left">Gabriely Silva</h1>
        <p className="text-lg text-center sm:text-left text-gray-700 dark:text-gray-300">
          Desenvolvedora Frontend | React | Next.js
        </p>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
          <p>
            Olá! Sou Gabriely, apaixonada por criar interfaces intuitivas e funcionais.
            Tenho experiência com React e estou buscando oportunidades na área de desenvolvimento web.
          </p>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Projeto 1:</strong> Plataforma de Feedback Estudantil <br />
              Tecnologias: React, FastAPI, PostgreSQL <br />
              <a href="https://github.com/Gasi23/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Código no GitHub
              </a>
            </li>
            <li>
              <strong>Projeto 2:</strong> Website Pessoal <br />
              Tecnologias: Next.js, CSS Modules <br />
              <a href="#" className="text-blue-600 hover:underline">Demo</a> |{' '}
              <a href="https://github.com/Gasi23/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Código no GitHub
              </a>
            </li>
          </ul>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <p>React, Next.js, JavaScript, HTML, CSS, Git, GitHub</p>
        </section>

        <section className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p>
            <a href="mailto:seuemail@example.com" className="text-blue-600 hover:underline">gabrielyv960@gmail.com</a><br />
            <a href="https://linkedin.com/in/seuperfil" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.linkedin.com/in/gabriely-vict%C3%B3ria-1393a71b3/</a><br />
            <a href="https://github.com/Gasi23" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/Gasi23</a>
          </p>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          Docs
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          Templates
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          Next.js
        </a>
      </footer>
    </div>
  );
}
