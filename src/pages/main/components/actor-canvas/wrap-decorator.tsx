import { TrashIcon } from "../../../../Icons";
import { ActorActions } from "../../../../store/actorStore";

type Props = {
  isActive: boolean;
  title: string;
};
function WrapDecorator(props: React.PropsWithChildren<Props>) {
  const { isActive, children, title } = props;
  const deleteActive = () => {
    ActorActions.deleteActiveActor();
  };
  return (
    <div
      tabIndex={1}
      className={`${
        isActive ? "border border-blue-500 border-solid" : ""
      } relative rounded overflow-hidden`}
    >
      {isActive && (
        <span className=" absolute top-0 left-0 bg-blue-500 px-1 py-1 text-white z-30">
          {title}
        </span>
      )}
      {isActive && (
        <div
          className=" bg-blue-500 absolute top-0 right-0 p-1 cursor-pointer z-30 "
          onClick={() => deleteActive()}
        >
          <TrashIcon></TrashIcon>
        </div>
      )}
      {children}
    </div>
  );
}

export default WrapDecorator;
