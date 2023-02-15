import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import i18n from "../i18n";

export function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    return null;
}

export function detectLanguage() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            fetch(`http://api.geonames.org/findNearbyJSON?lat="${pos.coords.latitude}"&lon="${pos.coords.longitude}"&username="rob12345"`)
                .then(res => res.json())
                .then(data => console.log(data))
        })
    }
}

export function setLanguage(language) {
    localStorage.setItem('lang', language)
    i18n.changeLanguage(localStorage.getItem('lang'))
}