import { Button } from "antd";
import { useState } from "react";
import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
type Props = {
  isFullScreen?: boolean;
  callback: (isFullScreen: boolean) => void;
};
function FullScreenButton(props: Props) {
  const [isFullScreen, setIsFullScreen] = useState(props.isFullScreen);
  const handleClick = () => {
    setIsFullScreen(!isFullScreen);
    props.callback(!isFullScreen);
  };
  return (
    <Button
      type="text"
      size="small"
      onClick={handleClick}
      icon={isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
    ></Button>
  );
}
export default FullScreenButton;
