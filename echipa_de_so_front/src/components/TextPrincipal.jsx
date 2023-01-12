import React from "react";
import "../style/TextPrincipal.css";

class TextPrincipal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="divMare">
                <div className="containerTextPrincipal">
                The most creative gaming setup designed by Artificial Intelligence
                </div>
            </div>
            
        );
    }
}

export default TextPrincipal;