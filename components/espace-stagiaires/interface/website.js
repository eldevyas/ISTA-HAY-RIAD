export default function Website(props) {
    const handleClick = (event) => {
        event.preventDefault();
        // window.open(props.URL, '_blank')
    }


    return(
    <>
        <div className="Site" onClick={handleClick}>
            <h1> {props.Index} - {props.Title}</h1>

            <p>{props.Description}</p>
        </div>
    </>
    );
}