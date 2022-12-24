import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

function RichTextEditor  ({ initialValue, getValue }) {
    const editor = useRef(null);

    return (
        <JoditEditor className='mb-3'
            ref={editor}
            value={initialValue}
            config={config}
            tabIndex={1}
            //   onBlur={(newContent) => getValue(newContent)}
            onChange={(newContent) => getValue(newContent)}
        />
    );
};

export default RichTextEditor;