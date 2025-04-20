import SocMed from "./soc-meds";

const Footer = () => {
  return (
    <div className="border-t-2 border-white/30 w-full py-10">
      <div className="w-16 flex mx-auto gap-4">
        <SocMed />
      </div>
      <div className="mx-auto text-white/50 text-sm font-light text-center mt-4">
        © Patrick 2025
      </div>
      <div className="mx-auto text-white/50 text-sm font-light text-center mt-4">
        <a
          href="https://github.com/teaguestockwell/react-icon-cloud"
          target="_blank"
        >
          <div className="underline">Icon cloud</div>
        </a>
        <a href="https://codepen.io/ajgwaupo/pen/dyrZBYV" target="_blank">
          <div className="underline">Space Background</div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
