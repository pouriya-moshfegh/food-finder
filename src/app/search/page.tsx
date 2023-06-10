import Link from "next/link";
import NavBar from "../components/nav/NavBar";
import Card from "../components/card/Card";
import SearchSideBAr from "../components/serachSideBar/SearchSideBAr";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          
          <SearchSideBAr />

          <div className="w-5/6">
            <Card />
          </div>
        </div>
      </main>
    </main>
  );
}
