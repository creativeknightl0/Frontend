import { useEffect, useState } from "react";

export default function InstallPrompt() {
    // state to store the install prompt
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    // state to decide whether to show the install button or not
    const [showInstall, setShowInstall] = useState(false);

    useEffect(() => {
        // Listen for the beforeinstallprompt event
        // This event fires when the browser determines the PWA can be installed
        const handler = (e) => {
            // Prevent the browser's default install prompt
            e.preventDefault();

            // Save the event object for later use
            setDeferredPrompt(e);
            console.log(deferredPrompt);

            // Show our custom install button
            setShowInstall(true);

            console.log('PWA installation available!');
        };

        window.addEventListener('beforeinstallprompt', handler);
        
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    // Install button click handler
    const handleInstall = async() => {
        if(!deferredPrompt) {
            return;
        }

        // Trigger the saved install prompt
        deferredPrompt.prompt();

        // Wait for the user's choice
        const { outcome } = await deferredPrompt.userChoice;

        console.log(`User choice: ${outcome}`); // outcome is either 'accepted' or 'dismissed'
    
        if(outcome === 'accepted') {
            console.log('PWA installation completed!');
        }
        else {
            console.log('PWA installation cancelled!');
        }

        // The prompt can only be used once, so reset it
        setDeferredPrompt(null);
        setShowInstall(false);
    };

    // Don't render anything if we are not showing install button
    if(!showInstall) {
        return null;
    }

    return (
        <div className="fixed b-20 r-20 z-1000">
            <button
                onClick={handleInstall}
                className="bg-[#4CAF50] text-white pt-15 pb-15 pl-30 pr-30 border-none rounded-xl font-16 cursor-pointer flex items-center gap-10"
            >
                Install button
            </button>
        </div>
    )
}