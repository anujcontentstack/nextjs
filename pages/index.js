export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>some-random-id-updated-deployment-1</p>}
    </div>
  )
}
export default Home
