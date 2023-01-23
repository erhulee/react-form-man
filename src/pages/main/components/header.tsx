import { Button } from "antd";

function Header() {
  return (
    <div className="flex justify-between items-center h-full">
      <span className=" text-white font-semibold text-xl">React Form Man</span>

      <Button>导出</Button>
    </div>
  );
}

export default Header;
