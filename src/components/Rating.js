import React from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent(props) {
    const {startCount, setStarCount, count,read} = props;

    const handleRating = (rate) => {
        setStarCount(rate)
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)

    return (
        <div className='App mb-3'>
            <Rating
                readonly={read|false}
                initialValue={startCount}
                iconsCount={count}
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