import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="bg-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600"> MyLogo </div>
                <div className="mx-8">
                    <input type="text" placeholder="Search..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <Button>Login</Button>
            </div>
        </nav>
    );
};

export default Navbar;