import Link from 'next/link'

export const Experience: React.FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-6 h-screen bg-experience-mesh"
    >
      <h1 className="text-6xl font-bold py-8 pb-16 text-black">Work Experience</h1>

      <div className="space-y-6 max-w-2xl w-full px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black">
            Lead Front-End Developer -{' '}
            <Link
              className="hover:text-[#0eff9b] transition-colors duration-300"
              rel="noopener"
              target="_blank"
              href="https://www.agora.red/"
            >
              Ágora
            </Link>
          </h2>
          <p className="text-sm text-gray-500">March 2021 - Present</p>
          {/* <ul className="list-disc list-inside space-y-2 mt-4 text-[#828282] ">
            <li>Descripción de la tarea o logro 1</li>
            <li>Descripción de la tarea o logro 2</li>
          </ul> */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black">
            Fullstack Developer - Contractor / Freelance
          </h2>
          <p className="text-sm text-gray-500">June 2019 - Present</p>
          {/* <ul className="list-disc list-inside space-y-2 mt-4 text-[#828282]">
            <li>Descripción de la tarea o logro 1</li>
            <li>Descripción de la tarea o logro 2</li>
          </ul> */}
        </div>
      </div>
    </section>
  )
}
