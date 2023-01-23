type Props = {
  isActive: boolean;
  title: string;
};
function WrapDecorator(props: React.PropsWithChildren<Props>) {
  const { isActive, children, title } = props;
  return (
    <div
      className={`${
        isActive ? "border border-blue-500 border-solid" : ""
      } relative rounded overflow-hidden`}
    >
      {isActive && (
        <span className=" absolute top-0 left-0 bg-blue-500 px-1 py-1 text-white z-30">
          {title}
        </span>
      )}
      {children}
    </div>
  );
}

export default WrapDecorator;
