const sleep = ms => new Promise(r => setTimeout(r, ms));

export default async function About() {
  console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME)
  console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME)
  await sleep(2000)
  return (
    <div className="h-60 flex-1 rounded-xl bg-teal-400 text-white flex items-center justify-center">Hello, About!</div>
  )
}