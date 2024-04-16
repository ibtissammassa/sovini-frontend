import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

//images
import settings from "../../public/settings.svg";
import plus from "../../public/plus-circle.svg";



function NavBar() {
    const menu = ['Home', 'Explore', 'Compains', 'Profile'];
    return ( 
        <div className="text-white absolute z-50 top-0 w-full flex px-14 p-12 justify-between items-center">
            <div className="flex gap-24 items-center">
                <Link href='/' className="text-2xl font-bold logo">Sovini.</Link>
                <ul className="flex gap-6 text-base">
                    {
                        menu.map((item, index) => {
                            return <li className="cursor-pointer hover:text-lime-400" key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <Input type="text" className="w-72" placeholder="Search..." />
                <Link className="rounded-md border bg-transparent border-slate-200 p-1.5" href={"#"}>
                    <Image src={plus} alt={"plus"} />
                </Link>
                <Avatar>
                    <AvatarImage src="/avatar.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Link className="rounded-md border bg-transparent border-slate-200 p-1.5" href={"#"}>
                    <Image src={settings} alt={"settings"} />
                </Link>
            </div>
        </div>
     );
}

export default NavBar;