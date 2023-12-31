 import "./css/priseItem.css";
function PriseItem({header,content,btn}) {
    const handleClick =() =>{

        console.log("click")
    }
     const rendercontent = content.map((item,index) => {
            return <li className = "item-content" key={index}>{item}</li>
        });
    return (
       
        <div className="prise-item">

            <div className="prise-item-heder">
                <h3>{header.title}</h3>
                <h1><span className="symbol">$</span>{header.price}<span>{"/" + header.description}</span></h1>
            </div>
            < div className="prise-item-body">
                <dl>
                    {rendercontent}
                </dl>
            </div>
            <button onClick={()=>handleClick()} className="btn">{btn}</button>
          

        </div>
    );

}
export default PriseItem;