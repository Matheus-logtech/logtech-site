
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>LogTech Seguros</title>
        <meta name="description" content="Protegendo o que move o seu negócio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        <header className="bg-blue-600 text-white p-6 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <img src="/logo.png" alt="LogTech Seguros" className="h-12" />
            <p className="text-lg font-bold">Protegendo o que move o seu negócio</p>
          </div>
        </header>

        <section className="max-w-6xl mx-auto py-16 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Soluções em Seguros para o Transporte</h1>
          <p className="text-lg">Especializados em seguros de pesados, frotas, cargas e muito mais.</p>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
          {['Pesados', 'Frotas', 'Cargas', 'Auto', 'Empresarial', 'Responsabilidade Civil'].map(seguro => (
            <div key={seguro} className="border border-blue-500 rounded-xl p-6 shadow hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Seguro de {seguro}</h3>
              <p className="text-gray-600">Proteção completa e confiável para o seu negócio.</p>
            </div>
          ))}
        </section>

        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Quem somos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <img src="/team1.png" className="rounded-xl shadow-lg" alt="Equipe 1" />
              <img src="/team2.png" className="rounded-xl shadow-lg" alt="Equipe 2" />
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Solicite uma cotação</h2>
          <form action="https://formsubmit.co/contato@logtechseguros.com.br" method="POST" className="grid gap-4">
            <input type="text" name="Nome" placeholder="Seu nome" required className="border p-2 rounded" />
            <input type="email" name="Email" placeholder="Seu e-mail" required className="border p-2 rounded" />
            <input type="tel" name="Telefone" placeholder="Seu telefone" required className="border p-2 rounded" />
            <select name="Tipo de Seguro" className="border p-2 rounded">
              <option>Pesados</option>
              <option>Frotas</option>
              <option>Cargas</option>
              <option>Auto</option>
              <option>Empresarial</option>
              <option>Responsabilidade Civil</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Enviar</button>
          </form>
        </section>

        <footer className="bg-blue-600 text-white py-6 text-center">
          <p>Rua Eng. Júlio César de Souza Araújo, 181 - Curitiba/PR</p>
          <p>(41) 98499-2244 | (41) 99166-6745 | contato@logtechseguros.com.br</p>
        </footer>

        <a href="https://wa.me/5541984992244" className="fixed bottom-5 right-5 z-50">
          <img src="/whatsapp.svg" alt="WhatsApp" className="w-12 h-12" />
        </a>
      </main>
    </>
  )
}
