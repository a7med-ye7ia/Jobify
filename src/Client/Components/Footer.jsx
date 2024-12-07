const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3472 17.468C11.9739 17.468 11.6006 17.328 11.3206 17.048L10.5623 16.2897C10.2239 15.9513 10.2239 15.3913 10.5623 15.053C10.9006 14.7147 11.4606 14.7147 11.7989 15.053L12.3589 15.613L14.2372 13.8863C14.5872 13.5597 15.1472 13.583 15.4739 13.933C15.8006 14.283 15.7772 14.843 15.4272 15.1697L13.3506 17.083C13.0589 17.3397 12.7089 17.468 12.3472 17.468Z" fill="white" />
                            <path d="M17.6672 25.5417H8.33392C2.94392 25.5417 1.94059 23.0334 1.68392 20.5951L0.808924 11.2501C0.680591 10.0251 0.645591 8.21672 1.85892 6.86339C2.90892 5.69672 4.64726 5.13672 7.16726 5.13672H18.8339C21.3656 5.13672 23.1039 5.70838 24.1422 6.86339C25.3556 8.21672 25.3206 10.0251 25.1922 11.2617L24.3172 20.5834C24.0606 23.0334 23.0572 25.5417 17.6672 25.5417ZM7.16726 6.87505C5.19559 6.87505 3.84226 7.26005 3.15392 8.03005C2.58226 8.66005 2.39559 9.62839 2.54726 11.0751L3.42226 20.4201C3.62059 22.2634 4.12226 23.7917 8.33392 23.7917H17.6672C21.8672 23.7917 22.3806 22.2634 22.5789 20.4084L23.4539 11.0867C23.6056 9.62839 23.4189 8.66005 22.8472 8.03005C22.1589 7.26005 20.8056 6.87505 18.8339 6.87505H7.16726Z" fill="white" />
                            <path d="M17.6672 6.87467C17.1889 6.87467 16.7922 6.47801 16.7922 5.99967V5.06634C16.7922 2.98967 16.7922 2.20801 13.9339 2.20801H12.0672C9.20892 2.20801 9.20892 2.98967 9.20892 5.06634V5.99967C9.20892 6.47801 8.81226 6.87467 8.33392 6.87467C7.85559 6.87467 7.45892 6.47801 7.45892 5.99967V5.06634C7.45892 3.01301 7.45892 0.458008 12.0672 0.458008H13.9339C18.5422 0.458008 18.5422 3.01301 18.5422 5.06634V5.99967C18.5422 6.47801 18.1456 6.87467 17.6672 6.87467Z" fill="white" />
                            <path d="M17.6789 15.788C17.2822 15.788 16.9322 15.5197 16.8272 15.123C16.7106 14.6564 16.9906 14.178 17.4572 14.0614C19.7322 13.4897 21.8439 12.498 23.7339 11.1214C24.1189 10.8414 24.6672 10.923 24.9589 11.3197C25.2389 11.7047 25.1572 12.253 24.7606 12.5447C22.6839 14.0497 20.3739 15.1347 17.8772 15.7647C17.8189 15.7764 17.7489 15.788 17.6789 15.788Z" fill="white" />
                            <path d="M8.33418 15.8233C8.26418 15.8233 8.19418 15.8117 8.12418 15.8C5.77918 15.2283 3.57418 14.2367 1.55584 12.86C1.15918 12.5917 1.05418 12.0433 1.32251 11.6467C1.59084 11.25 2.13918 11.145 2.53584 11.4133C4.37918 12.6733 6.38584 13.5717 8.53251 14.0967C8.99918 14.2133 9.29084 14.68 9.17418 15.1583C9.09251 15.555 8.73084 15.8233 8.33418 15.8233Z" fill="white" />
                        </svg>
                        <p className="text-lg font-bold">Jobify</p>
                    </div>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Ullam aspernatur, magnam quod reprehenderit labore iste at.
                        Ex mollitia necessitatibus aut.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-400">Our Team</a></li>
                        <li><a href="#" className="hover:text-gray-400">Partners</a></li>
                        <li><a href="#" className="hover:text-gray-400">For Candidates</a></li>
                        <li><a href="#" className="hover:text-gray-400">For Employers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Industries</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-gray-400">Telecommunications</a></li>
                        <li><a href="#" className="hover:text-gray-400">Hotels & Tourism</a></li>
                        <li><a href="#" className="hover:text-gray-400">Construction</a></li>
                        <li><a href="#" className="hover:text-gray-400">Education</a></li>
                        <li><a href="#" className="hover:text-gray-400">Financial Services</a></li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <input
                        type="email"
                        placeholder="E-Mail Address"
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full py-2 bg-[#3EB489] rounded hover:bg-[#368a71]">
                        Subscribe Now
                    </button>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center md:flex md:items-center md:justify-between">
                <p className="text-sm">
                    © Copyright Jobify 2024. Designed by sief ...!
                </p>
                <div className="mt-4 md:mt-0 flex justify-center space-x-4">
                    <a href="#" className="hover:text-gray-400">Privacy & Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;