import aboutCover from '../assets/images/about-cover.png';
import aboutImage from '../assets/images/about-image.png';
import aboutImageMob from '../assets/images/about-image-mob.png';

export default function About() {
  return (
    <section id="about" className="w-full  py-[100px]">
      <div className="max-w-[1200px] px-6  flex flex-col mx-auto items-center justify-center gap-[60px] lg:flex-row lg:items-start lg:gap-[83px]">
        <div className="flex w-full max-w-[541px] flex-col  gap-[10px] text-white">
          <h2 className="font-poppins text-4xl font-bold sm:text-5xl">
            ABOUT<span className="text-[#d98200]">.</span>
          </h2>
          <p className="font-poppins text-lg font-extralight">
            <span className="font-bold text-[#d98200]">AntStack</span> wasn't incorporated when I started. There was
            no entity, no bank account, no payroll, no contracts — just three founders and an intent. I built the
            rest.
          </p>
          <p className="font-poppins text-lg font-extralight">
            Six and a half years later, AntStack was acquired by HashedIn by Deloitte — and I carried the same role
            into a very different scale of organisation.
          </p>
          <p className="font-poppins text-lg font-extralight">
            Through those years my role never had a clean definition, and that was the point. When the founders
            were travelling, in client meetings, or operating across time zones, I was the fallback for everything
            non-technical. When something needed doing and there was no one whose job it was, it became mine.
          </p>
          <p className="font-poppins text-lg font-extralight">
            The result is a career that reads unusually broad: statutory compliance and Forex banking sit next to
            employee wellness programmes and warehouse SOPs. But the thread is consistent — I take ownership of the
            unglamorous, high-consequence work that keeps a business standing, and I do it without needing to be
            managed.
          </p>
          <p className="font-poppins text-lg font-extralight">
            Before AntStack, I spent twelve years in retail, e-commerce, hospitality and marketing operations —
            running stores, building contact centres, migrating payment infrastructure, and learning that
            operations is ultimately about people doing predictable things reliably.
          </p>
        </div>

        <div className="relative md:h-[250px] w-full max-w-[400px] shrink-0 sm:h-[400px]">
          <img src={aboutImageMob} alt="Gladwin Bosco" className="w-full lg:hidden" />
          <img src={aboutImage} alt="Gladwin Bosco" className="hidden w-full lg:block" />
        </div>
      </div>

      <img
        src={aboutCover}
        alt="Team at AntStack"
        className="mt-[60px] aspect-[1277/371] w-full object-cover object-bottom"
      />
    </section>
  );
}
