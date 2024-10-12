import Image from "next/image";
import { testDatabaseConnection } from "./actions";
import Link from "next/link";
import TaskListContainer from "@/components/TaskTableContainer";
import AddTaskContainer from "@/components/AddTaskContainer";

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main>
      <h1></h1>
      <br/>
      <TaskListContainer/>
    </main>
  );
}
