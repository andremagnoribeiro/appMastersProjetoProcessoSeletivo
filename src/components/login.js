import React, { Component } from 'react'; 
 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nome:  "",
          senha: ""
        };
         }
    
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
      onSaveLocalStorange=(nome,senha)=>{
        localStorage.setItem("nome",JSON.stringify({"nome": this.state.nome,"senha": this.state.senha }))
        }

      onNavigate = () => {
        this.onSaveLocalStorange(  );
        this.props.history.push("/home");
        
      }

      



    render() {
        return (
        <div >
            <TextField
            id="standard-name"
            label="Nome"
            value={this.state.nome}
            onChange={this.handleChange('nome')}
            margin="normal"
              />
            <TextField
            id="standard-name"
            label="Senha"
            value={this.state.senha}
            onChange={this.handleChange('senha')}
            margin="normal"
              />
            <Button variant="contained" onClick={this.onNavigate} >
            Login
            </Button>

            
        </div>
        );
    }
}
      
export default Login;