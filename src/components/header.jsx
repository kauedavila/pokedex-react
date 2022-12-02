export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center rounded-b-xl bg-red-500 py-8 w-full">
      <img
        src={"/images/logo_poke.png"}
        alt=""
        className="absolute self-center cursor-pointer"
        onClick={(e) => changeSprite(e)}
      />
    </div>
  );
}
