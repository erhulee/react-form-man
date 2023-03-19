import actorStore from "@store/actorStore";
import { useUpdate } from "@hooks/useUpdate";
import useSubscribe from "@hooks/useSubscribe";

console.log("update:", useUpdate);
import "./index.scss";

import { EditorRender, PreviewRender } from "@render";
import { Switch, Form } from "antd";
import { useState } from "react";

function ActorCanvas() {
  const update = useUpdate();
  useSubscribe(actorStore, update);
  const [isPreview, setPreview] = useState(false);

  console.log("render");
  return (
    <div>
      <div className="h-12 bg-blue-50 flex justify-end items-center px-8">
        <Switch
          checkedChildren="预览"
          unCheckedChildren="编辑"
          onChange={(value) => {
            setPreview(value);
          }}
        ></Switch>
      </div>
      {isPreview ? <PreviewRender /> : <EditorRender />}
    </div>
  );
}

export default ActorCanvas;
