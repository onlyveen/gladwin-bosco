import { BsArrowUpRightCircle } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0d0d0d]">
      <div className="relative flex flex-col lg:flex-row">
        <div className="flex flex-1 items-center justify-center overflow-hidden py-10 lg:py-0">
          <p className="select-none whitespace-nowrap font-anton text-[16vw] leading-[0.9] text-white sm:text-[18vw] lg:text-[22vw]">
            GLADWIN
            <br />
            BOSCO
          </p>
        </div>

        <div className="flex w-full flex-col justify-between gap-16 bg-white px-8 py-10 sm:px-[38px] sm:py-[42px] lg:w-[419px]">
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-4 text-[#0d0d0d]">
              <h2 className="font-poppins text-4xl font-bold sm:text-5xl">
                Say Hello<span className="text-[#d98200]">!</span>
              </h2>
              <p className="font-poppins text-[15px]">
                If you're a founder who needs the operational half of the business handled — properly, quietly, and
                without supervision — I'd like to hear from you.
              </p>
            </div>
            <a
              href="mailto:hello@gladwinbosco.com"
              className="flex items-center justify-center gap-2.5 bg-[#0d0d0d] px-[15px] py-[10px]"
            >
              <span className="font-poppins text-lg tracking-[-0.18px] text-white">Lets Talk</span>
              <BsArrowUpRightCircle size={18} className="text-white" />
            </a>
          </div>
          <p className="font-poppins text-[15px] font-extralight text-[#0d0d0d]">© 2026 All rights reserved.</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-full w-[21px] bg-[#d98200] lg:block" aria-hidden />
    </footer>
  );
}
