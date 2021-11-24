const VisitedCountryButton = ({onClick}) => {

    const handleClick = () => {
        console.log("button clicked");
        onClick();
    }

    return (
        <button onClick={handleClick}>Add to visited</button>
    )

}

export default VisitedCountryButton;