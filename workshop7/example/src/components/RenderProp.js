import React from "react";

const RenderProp = ({ render }) => {
    const surname = "Doe";
    return (
        <div>
            <h1>Render Component</h1>
            {render(surname)}
        </div>
    );
};

export default RenderProp;
