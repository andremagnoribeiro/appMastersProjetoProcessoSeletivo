import React, { Component } from 'react'; 

import Item from "./item";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const itens= [{nomeItem: "Celular Samsung J4", nomeEmprestado: "João", dataD: "18", dataE: "23"}
,{nomeItem: "Monitor AOC", nomeEmprestado: "Felipe", dataD: "10", dataE: "16"}]


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        abaInserir: 0,
        nomeItem:"",
        nomeEmprestado:"",
        dataD:"",
        dataE:"",
        itens:itens
      };
    }

    componentDidMount() {
      this.readFromStorage()
    }

    openAba =  ()=>{
      this.setState({ abaInserir: 1 });
    };
    
    openAba0 =  ()=>{
      this.setState({ abaInserir: 0 });
    };
     
    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

    inserindoItem =  ()=>{
      this.state.itens.unshift({
        "nomeItem": this.state.nomeItem,
        "nomeEmprestado": this.state.nomeEmprestado,
        "dataD": this.state.dataD,
        "dataE": this.state.dataE
    })
      this.setState({nomeItem:"",nomeEmprestado:"",dataD:"",dataE:""})
      this.setState({ abaInserir: 0 });
      this.saveInStorage();
    };


    async onDelete(nomeItem){
      console.log("Remover Item:",nomeItem)
      const auxItens =this.state.itens.filter(function(item) {
        return item.nomeItem != nomeItem; 
      });
      console.log("itensRemovidos:",auxItens);
      this.setState({ itens: auxItens});
      const itens = JSON.stringify(auxItens);
      localStorage.setItem("saveItens", itens);
    }

    saveInStorage() {
      const itens = JSON.stringify(this.state.itens);
      localStorage.setItem("saveItens", itens);
    }

    readFromStorage() {
      const saveItens = localStorage.getItem("saveItens");
      if (saveItens) {
        this.setState({ itens: JSON.parse(saveItens) });
      }
    }

   

    render() {
        console.log(this.state.itens)
        return (
        <div >


          {this.state.abaInserir==0?<Button variant="contained" onClick={this.openAba} >
          Inserir Novo Item
          </Button>
          :<Button variant="contained" onClick={this.openAba0}>Inserir Novo Item
          </Button> }


          {this.state.abaInserir==1 ? 
          <div >
            <TextField
            id="standard-name"
            label="Nome Item"
            value={this.state.nomeItem}
            onChange={this.handleChange('nomeItem')}
            margin="normal"
            />
            ___
            
              <TextField
              id="standard-name"
              label="Para Quem Foi Emprestado"
              value={this.state.nomeEmprestado}
              onChange={this.handleChange('nomeEmprestado')}
              margin="normal"
              />
              <div>
              <TextField
            id="standard-name"
            label="Data do Emprestimo"
            value={this.state.dataE}
            onChange={this.handleChange('dataE')}
            margin="normal"
              />
              ___
                <TextField
                  id="standard-name"
                  label="Data de Devolução"
                  value={this.state.dataD}
                  onChange={this.handleChange('dataD')}
                  margin="normal"
                />
                 <Button variant="contained" onClick={this.inserindoItem}>Inserir
          </Button> 
              </div>
             

          </div>
          
          
          : undefined }

         
          {this.state.itens.map((item, i) => {
              return (
                < Item
                  onDelete={() => this.onDelete(item.nomeItem)}
                  item={item}

                />
              );
            })}
        </div>
        );
    }

}
      
export default Home;