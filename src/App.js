import './App.css';
import Form  from './Form';
import Container from 'react-bootstrap/Container';
// import axios from 'axios';
import { Component } from 'react';
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listOfName: []
  //   }
  // }

  // getDataFromServer = async() => {
  //   const nameData = await axios.get(`http://localhost:3000/weather`)
  //   // console.log(nameData.data[0].city_name)
  //   let city_name="Amman";
  //   let a=nameData.data.filter(item=>{
  //     return item.city_name===city_name;
  //   });
  //   console.log(a[0].lat)
  //   // this.setState({listOfName: nameData.data.listOfName})
  // }

  render () {
    return (
     
    <Container>
      <Form/>
    </Container>
  );
}
}
export default App;
