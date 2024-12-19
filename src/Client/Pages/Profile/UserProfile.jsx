import ProfilePage from "../../Components/UserProfilePage/ProfilePage";
export default function UserProfile() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-48 bg-[url('/public/profile/photo-1532012197267-da84d127e765.jpeg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
            </div>
            {/* Profile Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative pb-5">
                <div className="flex flex-col md:flex-row gap-8">
                    <ProfilePage /> 
                </div>
            </div>
        </div>
    );
}

