function Item01 (props){

    console.log("01" + props);

    return (
    <div>
        <p>Voici mon props.number (depuis Item01.js) : {props.number}</p>
    </div>
    )
}

export default Item01;
