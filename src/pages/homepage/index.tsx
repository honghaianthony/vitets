import React from "react";

interface HomePageProps {
    title: string;
    pageNumber: number;
}

const HomePage = (props: HomePageProps) => {
    return (
        <>
            <p className="text-white font-bold text-2xl mx-auto py-3 text-center">
                {props.title}
            </p>
            <p className="text-white text-center text-xl">{props.pageNumber}</p>
        </>
    );
};

export default HomePage;
