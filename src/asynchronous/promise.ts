
export default function callbackSample() {
  const url = "https://api.github.com/users/naoki4287"

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
      .then((res) => {
        // レスポンスのBodyをJSONで読み取った結果を返す
        res.json()
          .then((json: Profile) => {
            console.log("Asynchornous Promise Sample 1:", json)
            resolve(json)
          })
          .catch((error) => {
            console.error(error)
            reject(null)
          })
      })
      .catch((error) => {
        console.error(error)
        reject(null)
      })
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log("Asynchornous Promise Sample 2:", profile)
      }
    })
}