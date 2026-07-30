import achivGlady from '../assets/images/achiv-glady.png';
import { achievementsLeft, achievementsRight, type Achievement } from '../data/content';

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <div className="flex w-full flex-col items-center justify-center border border-white/50 p-5">
      <div className="w-full font-poppins text-[15px] text-white">
        <p>
          <span>🏆 </span>
          <span className="font-bold">{achievement.title}</span>
        </p>
        <p className="font-extralight">{achievement.description}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="flex w-full max-w-[1200px] flex-col items-start gap-10 px-6 py-[80px] lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-[30px]">
        {achievementsLeft.map((a) => (
          <AchievementCard key={a.title} achievement={a} />
        ))}
      </div>

      <div className="relative order-first flex w-full shrink-0 flex-col items-center justify-end lg:order-none lg:w-[478px]">
        <img src={achivGlady} alt="Gladwin Bosco" className="h-[300px] w-auto object-cover object-top sm:h-[420px]" />
        <div className="mt-4 text-center font-poppins text-4xl font-bold text-white sm:text-5xl">
          <p>Selected</p>
          <p>
            Achievements<span className="text-[#d98200]">.</span>
          </p>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col items-start gap-[30px]">
        {achievementsRight.map((a) => (
          <AchievementCard key={a.title} achievement={a} />
        ))}
      </div>
    </section>
  );
}
