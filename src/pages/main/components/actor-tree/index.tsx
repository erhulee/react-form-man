import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeProps } from "antd/es/tree";
import { useSnapshot } from "valtio";
import useSubscribe from "../../../../hooks/useSubscribe";
import { useUpdate } from "../../../../hooks/useUpdate";
import actorStore, {
  ActorActions,
  ActorStore,
} from "../../../../store/actorStore";

function generateTree(store: ActorStore) {
  const actors = store.actors;
  return actors.map((actor) => {
    return {
      title: `${actor.type} (${actor.id})`,
      key: actor.id || "",
    };
  });
}
function ActorTree() {
  const update = useUpdate();
  useSubscribe(actorStore, update);
  const storeSnap: any = useSnapshot(actorStore);
  const tree = generateTree(storeSnap);
  const onSelect: TreeProps["onSelect"] = (selectedKeys) => {
    const id = selectedKeys[0] as string;
    ActorActions.activeActor(id);
  };

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      selectedKeys={[storeSnap.activeActor?.id!]}
      onSelect={onSelect}
      treeData={tree}
    />
  );
}
export default ActorTree;
