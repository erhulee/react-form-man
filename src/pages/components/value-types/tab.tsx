// Tab 子内容的 onChange 回调都会走到 parentChange
function Tab(props: any) {
  console.log("tab props:", props);
  return <div>Tab</div>;
}

export default Tab;
