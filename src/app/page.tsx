import AddTodo from '@/components/Addtodo'
import Todolist from '@/components/Todolist'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="   bg-gradient-to-tr from-primary to-secondary flex h-screen justify-center  items-center">
      <div className=" bg-slate-200 w-full max-w-md  rounded-xl ">
        {/*@ts-ignore*/}
        <Todolist />
        <AddTodo/>
        <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto "></div>
      </div>
    </main>
  );
}
