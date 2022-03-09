export default function callbackSample() {
  const url = "https://api.github.com/users/naoki4287"

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res.json()
          .then((json) => {
            console.log("Asynchornous Callback Sample 1:", json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log("Asynchornous Callback Sample 2:", profile)

}