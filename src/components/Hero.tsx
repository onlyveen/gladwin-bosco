import { AiFillLinkedin } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import headerText from '../assets/images/header-text.svg';
import headerTextCompliance from '../assets/images/header-text-compliance.svg';
import headerTextMob from '../assets/images/header-text-mob.svg';
import headerTextComplianceMob from '../assets/images/header-text-compliance-mob.svg';
import headerImg from '../assets/images/header-img.png';
import vectorUnderline from '../assets/icons/vector-underline.svg';

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center px-6 pt-[130px] pb-16 sm:px-10 sm:pt-[160px] lg:items-start lg:px-20 lg:pt-[270px] lg:pb-[80px]">
      {/* Mobile / tablet: composited text + overlapping portrait */}
      <div className="relative mb-8 w-full max-w-[420px] aspect-[524/300] sm:max-w-[480px] lg:hidden">
        <div className="hero-wordmark-glitch absolute left-0 top-0 w-[68%]">
          <img src={headerTextMob} alt="" className="wordmark-layer wordmark-a" aria-hidden />
          <img src={headerTextComplianceMob} alt="" className="wordmark-layer wordmark-b" aria-hidden />
          <span
            className="glitch-layer glitch-cyan"
            style={{
              maskImage: `url(${headerTextComplianceMob})`,
              WebkitMaskImage: `url(${headerTextComplianceMob})`,
            }}
          />
          <span
            className="glitch-layer glitch-red"
            style={{ maskImage: `url(${headerTextMob})`, WebkitMaskImage: `url(${headerTextMob})` }}
          />
        </div>
        <img
          src={headerImg}
          alt="Gladwin Bosco"
          className="absolute -right-[20%] bottom-0 h-[150%] w-[80%] top-0 -mt-[80px] object-cover object-top"
        />
      </div>

      {/* Desktop: layered absolute composition */}
      <img
        src={headerImg}
        alt="Gladwin Bosco"
        className="hidden lg:absolute lg:top-[100px] lg:left-[40%] lg:z-2 lg:block lg:h-[600px] lg:w-[30%] lg:object-cover lg:object-top"
      />
      <div className="hero-wordmark-glitch relative hidden w-full lg:block">
        <img src={headerText} alt="" className="wordmark-layer wordmark-a" aria-hidden />
        <img src={headerTextCompliance} alt="" className="wordmark-layer wordmark-b" aria-hidden />
        <span
          className="glitch-layer glitch-cyan"
          style={{ maskImage: `url(${headerTextCompliance})`, WebkitMaskImage: `url(${headerTextCompliance})` }}
        />
        <span
          className="glitch-layer glitch-red"
          style={{ maskImage: `url(${headerText})`, WebkitMaskImage: `url(${headerText})` }}
        />
      </div>

      <div className="relative z-3 mt-4 flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
          <p className="font-poppins text-xl font-medium text-[#d98200] sm:text-2xl">Executive Business Manager</p>
          <img src={vectorUnderline} alt="" className="w-[130px] sm:w-[200px]" aria-hidden />
        </div>
        <p className="max-w-[342px] font-poppins text-sm font-extralight text-white">
          Finance, legal, compliance, HR, banking, procurement, facilities. Whatever the organisation needed, at any
          level, without exception.
        </p>
      </div>
      <div className="relative z-3 mt-10 flex w-full max-w-[1200px] flex-col items-center gap-8 lg:-translate-y-10 lg:items-end lg:justify-end lg:px-6">
        <p className="max-w-[400px] text-center font-poppins text-sm font-extralight text-white lg:text-right">
          I've spent six years as the single operational anchor of a startup that grew from two founders to a 75+
          person team — through to its acquisition by Deloitte — and eighteen years before and alongside that,
          building the parts of businesses that customers never see but always feel.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex size-[52px] items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-[#0d0d0d]"
          >
            <AiFillLinkedin size={20} />
          </a>
          <a
            href="/resume.pdf"
            download
            aria-label="Download resume"
            className="flex size-[52px] items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-[#0d0d0d]"
          >
            <CgFileDocument size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
