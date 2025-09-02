import React from "react";
import useCustomHook from "../hooks/useCustomHook";

const Hello = () => {
    const [users, error, isLoading] = useCustomHook(
        "https://jsonplaceholder.typicode.com/users"
    );

    const [posts, postsError, postsIsLoading] = useCustomHook(
        "https://jsonplaceholder.typicode.com/posts"
    );

    console.log(posts, postsError, postsIsLoading);

    console.log(users, error, isLoading);

    return (
        <div>
            <h1>Hello Component</h1>
        </div>
    );
};

export default Hello;
