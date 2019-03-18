import React, { Component } from 'react'; 
import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';




var data = new Date();
var dia_sem = data.getDay(); 
class Item extends Component {

    




    render() {
        var data = new Date();
        return (
    <div>
        { this.props.item.dataD>=data.getDate() ? 
             <Card style={{margin:50, background:"green"}}>
             <div>Nome do Item : {this.props.item.nomeItem}</div> 
             <div>Emprestado Para: {this.props.item.nomeEmprestado}</div>  
             <div>Data do Emprestimo:{this.props.item.dataE}</div> 
             <div>Data de Devolução : {this.props.item.dataD}</div> 
             <Button variant="contained" onClick={this.props.onDelete}>Devolver Item
          </Button> 
         </Card>
            : 
             
        <Card style={{margin:50}}>
            <div>Nome do Item : {this.props.item.nomeItem}</div> 
            <div>Emprestado Para: {this.props.item.nomeEmprestado}</div>  
            <div>Data do Emprestimo:{this.props.item.dataE}</div> 
            <div>Data de Devolução : {this.props.item.dataD}</div> 
            <Button variant="contained" onClick={this.props.onDelete}>Devolver Item
          </Button> 
        </Card>
    
}


</div>
        
        );
    }
}
      
export default Item;