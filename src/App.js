import React, { Component, Fragment } from 'react'
import {Grid, Typography} from '@material-ui/core';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import Save from './Components/Save/Save';

class App extends Component {
 
  state = {
    cards : [
      {id:'123@!', name: 'John Doe', description: 'The man who flirting with every girl'},
      {id:'112@!', name: 'Anny Doe', description: 'The women who don\'t about existance of herself.'},
    ],
    newPost : false,
    onUpdate : false,
    id: '',
    name: '',
    description: ''
  }

  newPostHandler = () =>{
    this.setState({newPost : true, onUpdate:false, id:'', name:'', description:''})
  }
  
  goTOHomeHandler = () =>{
    this.setState({newPost : false, onUpdate:false, id:'', name:'',description:''});
  }

  onDeleteCard = (card) =>{
    const filterCards = this.state.cards.filter(c => c.id !== card.id);
    this.setState({cards: filterCards});
  }

  onEditCard = (card) =>{
    this.setState({onUpdate: true, id:card.id, name:card.name, description:card.description});
  }

  onChangeEdit = (event) =>{
       this.setState({[event.target.name] : event.target.value})
  }

  OnSaveHandler = () =>{
    const {id,name,description} = this.state;
    if(id ==='' || name === '' || description ==='') return alert('Some fields are missing');
    const Card = {id,name,description};
    const cardIndex = this.state.cards.findIndex(c => c.id===id);
    const Cards = [...this.state.cards];

    if(cardIndex === -1) Cards.push(Card);
    else Cards[cardIndex] = Card;
    
    this.setState({cards:Cards});
    this.goTOHomeHandler();
  }

  render() {
    
    let cards = this.state.cards.map( (card, index) => {
      return <Card key= { index } 
             id = {card.id} 
             name = {card.name} 
             description = {card.description}
             delet = {this.onDeleteCard.bind(this,card)}    // or we used arrow function to stop func. 
             edit = {this.onEditCard.bind(this,card)}
             />;
    })

    let save = (
      <Save home = {this.goTOHomeHandler}
        id= {this.state.id}
        name={this.state.name}     
        description={this.state.description}   
        change = {this.onChangeEdit}
        isUpdate = {this.state.onUpdate}
        save = {this.OnSaveHandler}       
       />
    );

    
    return (
      <Fragment>
        <Header newPostMethod = {this.newPostHandler} />
        <Grid container>
          <Grid sm= {2} item></Grid>
          <Grid sm = {8} item>
             { this.state.newPost || this.state.onUpdate ? save : cards }
          </Grid>
          <Grid sm= {2} item></Grid>
        </Grid>
        <Typography align = 'center' style={{marginTop:'2rem'}}>
          Made with <span style={{color:'red'}}>❤</span> in Sheryians.
        </Typography>
      </Fragment>
    )
  }
}

export default App;
