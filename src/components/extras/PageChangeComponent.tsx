import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface props {
    
}

export const  PageChangeComponent = () => {
        const location = useLocation();
            const [threshold, setThreshold] = useState<number>(0)

        useEffect(() => {
            console.log('Page changed to:', location.pathname);

            if (location.pathname == '/') {
                setThreshold(window.innerHeight - 75)
            } else {
                setThreshold(window.innerHeight + 300)
            }
        }, [location]);

        alert(threshold)

        return (<></>);
    };


    

