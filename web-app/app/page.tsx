import Image from "next/image";
import { testDatabaseConnection } from "./actions";
import Link from "next/link";
import TaskListContainer from "@/components/TaskTableContainer";

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main>
      <h1></h1>
      <TaskListContainer/>
    </main>
  );
}
