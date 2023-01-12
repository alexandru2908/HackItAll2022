import React from "react";
import "../style/Carousel.css";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            <div class="gallery-cell"></div>
            </div>
        );
    }
}

export default Carousel;