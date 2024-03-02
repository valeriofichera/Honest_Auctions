import React from 'react';

const RenderIfHtml = (
    { inputText }: 
    { inputText: string }
    ) => {
    let url: URL;

    try {
        url = new URL(inputText);
    } catch (_) {
        return <div>Not an image</div>; // If the URL is not valid, return nothing
    }

    return (
        <div>
            <img src={inputText} alt="Conditional content" />
        </div>
    );

}


export default RenderIfHtml;