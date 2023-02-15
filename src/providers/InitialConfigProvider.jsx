import {useEffect} from "react";

function InitialConfigProvider({ children }) {
    useEffect(() => {

        setVhSize();
        window.addEventListener('resize', setVhSize);
        return () => {
            window.removeEventListener('resize', setVhSize);
        };
    }, []);
    return (
        <>
            {children}
        </>
    );
}