const BucketListCountryButton = ({onClick}) => {

    const handleClick = () => {
        console.log("button clicked");
        onClick();
    }

    return (
        <button onClick={handleClick}>Add to bucket list</button>
    )

}

export default BucketListCountryButton;