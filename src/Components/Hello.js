


const Hello = (props) => {
//    console.log(props)

    return(
        <div style={{
            backgroundColor:"black",
            color: "wheat",
            border: "2px solid red",
            }}>
             <h1>Hello World</h1>
            
             <p>This is a paragraph</p>
             <button>Click Me</button>

             {props.children}
           
        </div>
    )
}

export default Hello;