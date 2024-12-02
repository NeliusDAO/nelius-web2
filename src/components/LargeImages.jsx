// import React from 'react';
// import CarouselOne from "../assets/img/carousel/pic 1carousel.png";
// import CarouselTwo from "../assets/img/carousel/pic 2carousel.png";
// import CarouselThree from "../assets/img/carousel/pic 3carousel.png";

// const LargeImages = () => {
//     return (
//         <div style={styles.imageGrid}>
//             <img src={ CarouselOne } alt="Large images" style={styles.image} />
//             <img src={ CarouselTwo } alt="Large images" style={styles.image} />
//             <img src={ CarouselThree } alt="Large images" style={styles.image} />
//         </div>
//     );
// };

// const styles = {
//     imageGrid: {
//         display: 'grid',
//         gridTemplateColumns: '1fr 2fr 1fr', // 1fr for the first and third columns, 1.5fr for the second column
//         gap: '10px', // Adjust the gap between images as needed
//         marginTop : '30px',
//     },
//     image: {
//         width: '100%',
//         height: 'auto',
//         display: 'block',
//     },
// };

// export default LargeImages;

import React, { useState, useEffect } from "react";
import CarouselOne from "../assets/img/carousel/pic 1carousel.png";
import CarouselTwo from "../assets/img/carousel/pic 2carousel.png";
import CarouselThree from "../assets/img/carousel/pic 3carousel.png";

const LargeImages = () => {
    const images = [CarouselOne, CarouselTwo, CarouselThree];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div style={styles.imageGrid}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Carousel ${index + 1}`}
                    style={{
                        ...styles.image,
                        ...(index === activeIndex ? styles.activeImage : styles.inactiveImage),
                    }}
                />
            ))}
        </div>
    );
};

const styles = {
    imageGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr", // Keep all images side by side
        gap: "10px", // Adjust spacing between images
        marginTop: "30px",
    },
    image: {
        width: "100%",
        height: "auto",
        display: "block",
        transition: "all 0.5s ease-in-out", // Smooth transition for styles
    },
    activeImage: {
        opacity: 1, // Fully visible
        transform: "scale(1.1)", // Slight zoom for highlighting
        filter: "none", // Remove any grey-out filter
    },
    inactiveImage: {
        opacity: 0.5, // Greyed out
        transform: "scale(1)", // Normal size
        filter: "grayscale(80%)", // Make it look less vibrant
    },
};

export default LargeImages;