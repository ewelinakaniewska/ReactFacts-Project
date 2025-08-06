import logo from "../assets/react-logo.png";
export default function Navbar() {
  return (
    <header className="bg-[#21222A] h-[90px] w-[550px] p-[30px]">
      <nav className=" flex flex-row items-center h-full">
        <img src={logo} alt="React Logo" className="size-[35px]" />
        <p className="text-[#61DAFB] font-[700] ml-[7px] text-[1.4rem]">
          ReactFacts
        </p>
      </nav>
    </header>
  );
}
