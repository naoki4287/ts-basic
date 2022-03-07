export default function unknownSample() {
  const maybeNuber: unknown = 10
  console.log("unknown sample 1:", typeof maybeNuber, maybeNuber)

  const isFoo = maybeNuber === "foo"
  console.log("unknown sample 2:", typeof isFoo, isFoo)

  // const sum = maybeNuber + 10

  if (typeof maybeNuber === 'number') {
    const sum = maybeNuber + 10
    console.log("unknown sample 3:", typeof sum, sum)
  }
}