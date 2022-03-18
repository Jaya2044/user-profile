import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css';
import Userlists from '../components/Userlists';

export default function Home({users}) {
  console.log(users)
  return (
    <div>

      <Head>
        <title>User Profile</title>
        <meta name="keywords" content='user profile, profile details' />
        <meta name="description" content='user profile by using NextJS' />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>User Profile's <a href="/">Application</a></h1>
      </div>

      <Userlists users={users} />

    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users
    }
  }
}