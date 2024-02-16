const HARD_SKILLS = [
  'Next.js',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Postgresql',
  'MongoDB',
]
const SOFT_SKILLS = ['Autodidact', 'Time management', 'Teamwork', 'Creativity']
const IDIOMS = ['Spanish native', 'English Intermediate']

export const Knowledge: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center py-16 bg-black"
    >
      <div className="container flex gap-8">
        <div className="flex items-center flex-col gap-6 w-1/2">
          <h2 className="text-6xl font-bold">Hard skills</h2>
          <div className="flex flex-wrap gap-4">
            {HARD_SKILLS.map((skill) => (
              <span
                className="border border-[#0eff9b] bg-[#0eff9b]/5 text-[#0eff9b] px-4 text-center backdrop-blur"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-1/2 gap-6">
          <h2 className="text-6xl font-bold">Soft skills</h2>
          <div className="flex flex-wrap gap-4">
            {SOFT_SKILLS.map((skill) => (
              <span
                className="border border-[#0eff9b] bg-[#0eff9b]/5 text-[#0eff9b] px-4 text-center backdrop-blur"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 pt-16 z-10">
        <h2 className="text-6xl font-bold">Idioms</h2>
        <div className="flex flex-wrap gap-4">
          {IDIOMS.map((idiom) => (
            <span
              className="border border-[#0eff9b] bg-[#0eff9b]/5 text-[#0eff9b] px-4 text-center backdrop-blur"
              key={idiom}
            >
              {idiom}
            </span>
          ))}
        </div>
      </div>
      <div
        className="rotate-180 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                    bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
    </section>
  )
}
