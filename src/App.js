import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import Search from './Search'; 
import CardList from './CardList';
//import robotes from './data';

class App extends React.Component {
  constructor(){
    super();
    this.state={
     robotes:  [],
      searchField :'',
      
    }
     console.log('Constructor is running...')

  }

  
  componentDidMount = () => {
    // console.log("Component did mount is running...")
    // await this.setState({robots : robots})
    console.log("Component Did Mount is running");
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          // console.log(users);
          this.setState({robotes : users})
        })
  }

  onInputChange=async(val)=>{
   await this.setState({searchField :val }) 
    console.log(this.state.searchField);
  }
  
  

  render() {
    const togglePopup = (dugme) => {alert()
      setShowPopup({
        
        show: !showPopup.show,
        what: `${dugme}`}
        )
    }

    console.log('Render is running...');

    const {robotes, searchField} = this.state;

    const filteredrobotes = robotes.filter((robotes) => {
        return robotes.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
    <div className="tc">
    <Search onInputChange={this.onInputChange}/>
   <CardList onClick={() => togglePopup("popup")} robotes={filteredrobotes}/>
   
    </div>
    );
  }
}
  

export default App;
