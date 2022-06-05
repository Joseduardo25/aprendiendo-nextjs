import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [person, setPerson] = useState(null);
  const GetApi = async () => {
    try {
      const data = await fetch("http://localhost:3000/api/luis");
      const response = await data.json();
      setPerson(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetApi();
  }, []);

  return <div className={styles.container}>pagina de contacto</div>;
}
