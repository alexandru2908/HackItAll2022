import React from "react";
import { Navigate } from "react-router-dom";
import "../style/Cart.css";

class Cart extends React.Component {
    constructor(props) {
        super(props);
    this.state=({
        list_products:[]
    })
    }

    async getProducts(labels, imageLink,timestamp)
    {
        let response = await fetch("http://localhost:5000/get_products", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
            })
        })
        response = await response.json();
        console.log(response.products);
        this.setState({
            list_products:response.products
        })
        console.log(this.state.list_products)
        

        return response.error;
    }


    displayProducts(){
        let products=this.state.list_products;
        let interiorPagina=document.getElementsByClassName("interiorPagina")[0];
        products.forEach(element => {
            console.log(element.imagelink);
            if(element.createdBy!=localStorage.getItem("username")){
                let grup=document.createElement("div");
                grup.classList.add("grup");
                let imagineProdus=document.createElement("img");
                imagineProdus.classList.add("imagineProdus");
                imagineProdus.src=element.imagelink;
                let descriereProdus=document.createElement("div");
                descriereProdus.classList.add("descriereProdus");
                let parDescriere=document.createElement("p");
                parDescriere.textContent=element.description;
                let paragraf=document.createElement("p");
                paragraf.textContent="test" ;
                paragraf.setAttribute("timestamp",element.timestamp);
                paragraf.classList.add("counterDown");
                descriereProdus.appendChild(parDescriere);
                descriereProdus.appendChild(paragraf);
                grup.appendChild(imagineProdus);
                grup.appendChild(descriereProdus);
                interiorPagina.appendChild(grup);

            }

            
        });
    }
  

    async componentDidMount(){
        await this.getProducts();
       
        this.displayProducts();
        console.log("componentDidMount");

        setInterval(() => {
            let counterDown=document.getElementsByClassName("counterDown");

            for(let i=0;i<counterDown.length;i++){
                console.log(counterDown[i].getAttribute("timestamp"));
            let distance= Math.abs(7200000 -  (Date.now() - counterDown[i].getAttribute("timestamp")));
            
            console.log("old " + counterDown[i].getAttribute("timestamp"))
            console.log("now " + Date.now());
            console.log("distance " + distance);

            let hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
            counterDown[i].textContent = "Offer expires in: " + hours + "h " + minutes + "m " + seconds + "s ";


            }
        },2000);
    }

    render() {

        if (!localStorage.getItem("username"))
            return (<Navigate to="/login" />)

        return (
            <div className="containerCart">
                <div className="paginaCart">
                    <div className="headerCart"><div className="scrisCart">{localStorage.getItem("username")} Cart</div></div>
                    <div className="interiorPagina"> 
                        {/* <div className="grup">   
                            <img className="imagineProdus"/>
                            <div className="descriereProdus"> <div className="scrisProdus">Descrierea puli</div> </div>
                        </div>
                        <div className="grup">  
                            <div className="imagineProdus">  </div>
                            <div className="descriereProdus"> <div className="scrisProdus">Descrierea puli</div> </div>
                        </div>
                        <div className="grup">  
                            <div className="imagineProdus">  </div>
                            <div className="descriereProdus"> <div className="scrisProdus">Descrierea puli</div> </div>
                        </div>
                        <div className="grup">  
                            <div className="imagineProdus">  </div>
                            <div className="descriereProdus"> <div className="scrisProdus">Descrierea puli</div> </div>
                        </div> */}
                    </div>
                   



                    </div>

                

            </div>
        );
    }


}

export default Cart;