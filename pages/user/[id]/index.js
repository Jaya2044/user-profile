import React from 'react';
import HomeStyles from "../../../styles/Home.module.css"

const index = ({user}) => {
  return (
    <div>
       {
           user && 
           <main className={HomeStyles.main}>
               <div className={HomeStyles.grid}>
                    <div className={HomeStyles.card}>
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Company: {user.company.name}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                    </div>
               </div>
           </main>
       }
    </div>
  )
}

export async function getStaticProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    const user = await res.json();
    return {
        props: {user}
    }
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    const paths = users.map(user => ({ params: { id: user.id.toString()}}));
    return {
        paths,
        fallback: false
    }
}

export default index;