import ellipse1 from '../assets/images/ellipse1.svg';
import { skills, skillTags } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-[1200px] mx-auto px-6 py-[80px]">
      <div className="flex flex-col items-start justify-center gap-10">
        <h2 className="font-poppins text-4xl font-bold text-white sm:text-5xl">
          Skills<span className="text-[#d98200]">.</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-x-[60px] gap-y-10 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title} className="flex items-start gap-10">
              <img src={ellipse1} alt="" className="size-[50px] shrink-0" aria-hidden />
              <div className="font-poppins text-lg font-extralight text-white">
                <p className="font-bold">{skill.title}</p>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[50px] flex flex-wrap items-start justify-center gap-[10px]">
        {skillTags.map((tag) => (
          <div
            key={tag}
            className="flex items-center justify-center rounded-full border border-white/60 px-[14px] py-[7px]"
          >
            <p className="whitespace-nowrap font-poppins text-[13px] tracking-[-0.13px] text-white/60">{tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
