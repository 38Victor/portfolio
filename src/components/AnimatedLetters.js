import React from 'react';
import './index.scss'; // Ensure it points to the correct SCSS file

const AnimatedLetters = ({ letterClass, strArray, idx, elementType: ElementType = 'span' }) => {
    return (
        <ElementType>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </ElementType>
    );
};

export default AnimatedLetters;
