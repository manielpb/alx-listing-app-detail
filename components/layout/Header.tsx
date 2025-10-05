import React from "react";

const Header: React.FC = () => {
    return (
        <header className="w-full shadow-md bg-white">
            <div className="flex items-ccenter justify-between px-6 py-4">
                <div className="text-2xl font-bold text-blacck-600 cursor-pointer">
                    alx
                </div>
                <div className="flex-1 mx-6">
                    <input type="text" placeholder="Search for accomodations" className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <div className="space-x-4">
                        <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100">
                            Sign in
                        </button> 
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Sign up
                        </button>
                </div>
            </div>

            <nav className="flex justify-center space-x-6 bg-gray-50 py-2 text-sm font-medium">
                <a href="#" className="hover:text-blue-600">
                    Rooms
                </a>
                 <a href="#" className="hover:text-blue-600">
                     Mansion
                 </a>
                <a href="#" className="hover:text-blue-600">
                    Countryside
                </a>
                <a href="#" className="hover:text-blue-600">
                     Apartments
                </a>
                <a href="#" className="hover:text-blue-600">
                    Villas
                </a>
            </nav>
        </header>
    );
}

export default Header;