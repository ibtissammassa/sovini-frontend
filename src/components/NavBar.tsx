import Link from "next/link";

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

        </div>
     );
}

export default NavBar;