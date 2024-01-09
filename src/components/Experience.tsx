export const Experience: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-6 h-screen bg-gradient-to-r from-green-200 to-[#0eff9b] overflow-auto">
      <h1 className="text-6xl font-bold mb-8">My Work Experience</h1>

      <div className="space-y-6 max-w-2xl w-full px-4">
        {/* Experiencia 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black">
            Lead Front End Developer - Ágora
          </h2>
          <p className="text-sm text-gray-500">March 2021 - Present</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-[#828282] ">
            <li>Descripción de la tarea o logro 1</li>
            <li>Descripción de la tarea o logro 2</li>
            {/* ... más tareas o logros */}
          </ul>
        </div>

        {/* Experiencia 2 */}
        {/* Repetir la estructura anterior para más experiencias laborales */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black">
            Lead Front End Developer - Ágora
          </h2>
          <p className="text-sm text-gray-500">March 2021 - Present</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-[#828282]">
            <li>Descripción de la tarea o logro 1</li>
            <li>Descripción de la tarea o logro 2</li>
            {/* ... más tareas o logros */}
          </ul>
        </div>
      </div>
    </section>
  )
}
