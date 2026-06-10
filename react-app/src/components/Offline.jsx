export default function Offline() {
    return (
        <div className="flex flex-col items-center justify-center h-100 text-ceneter p-20">
            <h1>Offline Mode</h1>
            <p>Please check your internet connection.</p>
            <p>Some features are still available offline.</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-20 pt-10 pb-10 pr-20 pl-20 font-16 cursor-pointer"
            >
                Try Again
            </button>
        </div>
    )
}