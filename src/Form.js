import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from './Table';
import Card from './Card'
import Error from './Error';

class  BasicExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:"",
            lat:"",
            long:"",
            Name:"",
            error:"",
            urlImage:"",
            errorImage:"",
            description:"",
            description2:"",
            datetime2:"",
            description3:"",
            datetime3:"",
            datetime:"",
            show:false,
        }
        

    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    handeSubmit=(event)=>{
        event.preventDefault();
        const city = this.state.city;
        const url = `https://apiback-301.herokuapp.com/weather`;
        const urlMap=`https://maps.locationiq.com/v3/staticmap?key=pk.b4a103b455cdd4e565619a9d076612ae&center=${this.state.lat},${this.state.long}&zoom=10`;
        axios.get(urlMap).then((res)=>{
            console.log(res.config.url)
            const urlImage=res.config.url;
            this.setState({
                urlImage:urlImage,
            })
        }).catch((error)=>{
            this.setState({
                errorImage:error.message
            });
        });
        
        axios.get(`${url}?searchQuery=${city}`).then((res)=>{
  
        console.log(res.data.data[0].datetime);
        console.log(res.data.data[0].weather.description);
        console.log(res.data.data[0].datetime);

            const lat=res.data.lat;
            const long=res.data.lon;
            const Name=res.data.city_name;
            const description=res.data.data[0].weather.description;
            const datetime=res.data.data[0].datetime;
            const description2=res.data.data[1].weather.description;
            const datetime2=res.data.data[1].datetime;
            const description3=res.data.data[2].weather.description;
            const datetime3=res.data.data[2].datetime;
            this.setState({
                lat:lat,
                long:long,
                Name:Name,
                description:description,
                datetime:datetime,
                description2:description2,
                datetime2:datetime2,
                description3:description3,
                datetime3:datetime3,
                show:true
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                error:error.message,
                
            });
        });
    }
  render(){
  return (
    <>
       <>
        <Form>
          <Form.Group>
            <Form.Label>Enter a Name </Form.Label>
            <Form.Control type="text" name="city" placeholder='Enter city Name' onChange={this.handleChange}/>
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit" onClick={this.handeSubmit} >
            Explore!
          </Button> <br/><br/>
          <Form.Label>Please Double Click on button Explor! to show Image </Form.Label>

        </Form>
        {this.state.error&& 
     <Error error={this.state.error}
     />
    }
     <div className='content-table1'>
      <Table name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage} description={this.state.description}  datetime={this.state.datetime}  description2={this.state.description2}  datetime2={this.state.datetime2} description3={this.state.description3}  datetime3={this.state.datetime3}/>
     {this.state.show
      && <Card  name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage}/>
     }
     </div>
     
   
      </>
      </>
  );


}
}
export default BasicExample;
