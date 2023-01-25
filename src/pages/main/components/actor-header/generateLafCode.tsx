export function generateAddCode(
  instanceKeys: string[],
  collectionName: string
) {
  return `import cloud from '@/cloud-sdk'
exports.main = async function (ctx: FunctionContext) {
  // body, query 为请求参数, auth 是授权对象
  const { auth, body, query, headers } = ctx
  const token = headers.token;
  const result = cloud.parseToken(token);
  const userid = result.uid;

  const { ${instanceKeys.join(", ")} } = body;
  
  // 数据库操作
  const db = cloud.database()
  const r = await db.collection('${collectionName}').add({
    ${instanceKeys.join(", ")})

  return {
    code: 0,
    msg: "新建成功",
    data: r
  }
}
`;
}
