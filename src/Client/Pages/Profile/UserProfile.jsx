import { useEffect, useState } from "react";
import ProfilePage from "../../Components/UserProfilePage/ProfilePage";

export default function UserProfile() {
    const [user, setUser] = useState(null); 
    // static account
    const userId = "67659f6e077622ee087751e8";

    const fetchUser = async () => {
        try {
            const url = `http://localhost:3000/user/getUser/${userId}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setUser(data); // Ensure `data` matches the expected shape of `user`
        } catch (error) {
            console.error("Error fetching user data:", error.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (!user) {
        // Show loader while the user data is being fetched
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-48 bg-[url('/public/profile/photo-1532012197267-da84d127e765.jpeg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
            </div>
            {/* Profile Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative pb-5">
                <div className="flex flex-col md:flex-row gap-8">
                    <ProfilePage user={user} />
                </div>
            </div>
        </div>
    );
}
