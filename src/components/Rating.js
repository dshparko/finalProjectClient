import React from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent(props) {
    const {startCount, setStarCount} = props;

    // Catch Rating value
    const handleRating = (rate) => {
        setStarCount(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className='App mb-3'>
            <Rating
                iconsCount={10}
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                transition={true}
                allowFraction={true}
                allowHover={true}
            />
        </div>
    )
}