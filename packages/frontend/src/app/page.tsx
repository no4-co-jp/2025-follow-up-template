import Link from 'next/link'

export default function Page() {
  console.log(process.env.MYSQL_HOST)
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <Link href='/sample'>Sample画面へ</Link>
    </>
  )
}
