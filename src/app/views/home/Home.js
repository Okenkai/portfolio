import React, { useEffect, useState } from "react";
import Career from "@views/career/Career";
import { useNavigation } from "@context/NavigationContext";
import NavBar from "@views/home/navBar/NavBar";

const contents = {
    career: <Career />,
    // project: ProjectComponent,
    // degree: DegreeComponent,
};

export default function Home() {
    const { route, handleNavigation } = useNavigation();
    const [content, setContent] = useState(null);

    useEffect(() => {
        if (route && contents[route]) {
            setContent(contents[route]);
        }
    }, [route]);

    return (
        <React.Fragment>
            <NavBar handleNavigation={handleNavigation} />
            {content}
        </React.Fragment>
    );
}
