export default function PokeBallCss() {
  return (
    <div>
      <div className="aspect-[2/1] w-[200px] bg-red-500 rounded-tl-[110px] rounded-tr-[110px] border-[10px] border-gray-800 flex items-end justify-center">
        <div className="relative aspect-square w-[75px] bg-white rounded-full top-12 border-gray-800 border-[10px]" />
      </div>
      <div className="aspect-[2/1] w-[200px] bg-white rounded-bl-[110px] rounded-br-[110px] border-[10px] border-gray-800" />
    </div>
  );
}
