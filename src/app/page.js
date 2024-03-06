import Image from "next/image";
import styles from "./page.module.css";
import Signup from "@/Components/Signup/signup";
import Sidebar from "../Components/Sidebar/Sidebar";
export default function Home() {
  return (
    <div>
     {/* <Signup/> */}
     <Sidebar/>
    </div>
  );
}
