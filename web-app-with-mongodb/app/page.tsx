import Image from "next/image";
import { testDatabaseConnection } from "./actions";
import Link from "next/link";

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main></main>
  );
}
