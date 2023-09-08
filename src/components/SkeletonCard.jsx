export const SkeletonCard = () => {
    return (
        <div
            className="w-64 h-75 bg-transparent overflow-hidden shadow-md shadow-black group cursor-pointer transition duration-200 ease-in transform z-1 sm:hover:scale-105">
            <div className="animate-pulse h-48 bg-green-200"></div>
            <div className="px-6 py-4">
                <div className="animate-pulse h-6 w-2/3 bg-green-200 mb-2"></div>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="animate-pulse h-6 w-1/4 bg-green-200"></div>
                <div className="animate-pulse h-6 w-1/4 bg-green-200"></div>
            </div>
        </div>

    );
}