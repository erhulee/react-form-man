import { DownOutlined } from "@ant-design/icons";
import { Tag, Tree } from "antd";
import type { TreeProps } from "antd/es/tree";
import { useSnapshot } from "valtio";
import useSubscribe from "../../../../hooks/useSubscribe";
import { useUpdate } from "../../../../hooks/useUpdate";
import actorStore, {
  ActorActions,
  ActorStore,
} from "../../../../store/actorStore";
import { Actor } from "../../../components/wiget-list/share/Widget";

function generateTree(store: ActorStore) {
  const root = store.actorsTree;
  function _generate(root: Actor) {
    const instance: any = {
      key: root.id || "",
      title: (
        <div className="p-1">
          <Tag color="#108ee9">{root.type}</Tag>
          {root.props.name || "defaultName"}{" "}
        </div>
      ),
    };
    if (Array.isArray(root.props.children)) {
      instance.children = root.props.children.map((child) => _generate(child));
    } else {
      instance.isLeaf = true;
    }
    return instance;
  }
  return _generate(root);
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
      treeData={[tree]}
    />
  );
}

export default ActorTree;
