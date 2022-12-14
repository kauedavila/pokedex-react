import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center rounded-b-xl bg-red-500 py-8 w-[100vw]">
      <Link className="absolute self-center " to={"/"}>
        <img src={"/images/logo_poke.png"} alt="" />
      </Link>
    </div>
  );
}
