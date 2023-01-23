import { Button } from "antd";
import { GoBackIcon, GoOnIcon } from "../../../../Icons";
import actorStore from "../../../../store/actorStore";
function ToolKits() {
  function exportTSX() {
    const actors = actorStore.actors;
    console.log();
  }
  return (
    <div className=" flex p-2 bg-blue-100 items-center justify-between">
      <div>
        <Button icon={<GoBackIcon></GoBackIcon>} className=" mr-2"></Button>
        <Button icon={<GoOnIcon></GoOnIcon>}></Button>
      </div>

      <div>
        <Button type="link">重置</Button>
        <Button className=" mx-2">导出Antd Pro</Button>
        <Button onClick={() => exportTSX()}>导出TSX</Button>
      </div>
    </div>
  );
}

export default ToolKits;
