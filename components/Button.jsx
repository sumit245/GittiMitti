import React from "react"
import '../src/App.css'

export default function Button({ title, action, ...props }) {
    return (
        <button
            className="continue_button"
            title={title}
            onClick={action}
            {...props}
        >
            {title}
        </button>
    );
}

