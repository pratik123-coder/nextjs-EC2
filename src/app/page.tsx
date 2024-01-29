import Image from "next/image";

export default function Home() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
        <div className="w-max">
          <h1
            className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold ps-7">
            Hello Everybody!
          </h1>
          <h1 className="text-center text-3xl p-5">
            This is Pratik Mohanty
          </h1>
          <h1 className="text-center">
            CSE - 15
            Rollnumber - 2105639
          </h1>
        </div>
      </div>
  );
}
