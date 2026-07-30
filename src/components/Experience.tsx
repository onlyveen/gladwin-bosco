import { useState } from 'react';
import { hiddenJobs, visibleJobs, type Job } from '../data/content';

function JobLogo({ job }: { job: Job }) {
  if (job.logo) {
    return (
      <img
        src={job.logo}
        alt=""
        className={`size-12 shrink-0 rounded-full object-cover sm:size-16 ${job.badgeClass ?? ''}`}
        aria-hidden
      />
    );
  }
  return (
    <div
      className={`flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20 font-poppins text-lg font-bold sm:size-16 ${job.badgeClass ?? 'bg-white text-[#0d0d0d]'}`}
      aria-hidden
    >
      {job.initials}
    </div>
  );
}

function JobRow({ job }: { job: Job }) {
  return (
    <div className="flex w-full items-center gap-[30px] sm:gap-[50px]">
      <JobLogo job={job} />
      <div className="flex flex-1 flex-col gap-1.5 font-poppins text-white">
        <p className="text-lg font-bold sm:text-xl">
          {job.company}
          {job.companySubtitle ? <span className="block font-bold">{job.companySubtitle}</span> : null}
        </p>
        <div className="text-base sm:text-lg">
          <p>{job.role}</p>
          <p className="text-white/50">{job.period}</p>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="experience" className="flex w-full max-w-[1200px] justify-center px-6 py-[80px]">
      <div className="flex w-full flex-col items-start gap-x-[100px] gap-y-10 lg:flex-row lg:justify-center">
        <div className="flex w-full max-w-[493px] flex-col items-start gap-10">
          <h2 className="font-poppins text-4xl font-bold text-white sm:text-5xl">
            Experience<span className="text-[#d98200]">.</span>
          </h2>

          {visibleJobs.map((job) => (
            <JobRow key={job.company} job={job} />
          ))}

          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="cursor-pointer font-poppins text-lg tracking-[-0.18px] text-white underline decoration-solid underline-offset-2"
          >
            {showMore ? 'Show Less' : `Show More (+${hiddenJobs.length})`}
          </button>
        </div>

        {showMore && (
          <div className="flex w-full max-w-[493px] flex-col items-start gap-10">
            {hiddenJobs.map((job) => (
              <JobRow key={job.company} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
