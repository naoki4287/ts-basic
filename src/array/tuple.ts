export default function tupleSample () {
  // 一般的なタプルの型定義
  let response: [number, string] = [200, "OK"]
  // response = [400, "Bad Request", "Email parameter is missing"]
  // response = ["404", "Bad Request"]
  console.log("Array tuple sample 1:", response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ["Kana", "Miku", "Keiko"]
  girlfriends.push("Misa")
  console.log("Array tuple sample 2:", girlfriends)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ["git add", "git commit", "git push"]
  // commands.push("git fetch")
  // commands[2] = "git pull"
  console.log("Array array sample 5:", commands)
}