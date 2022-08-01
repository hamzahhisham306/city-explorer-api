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
            // wind:"",
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
        const url = `http://localhost:3000/weather`;
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
        
        axios.get(url).then((res)=>{
            let filterres=res.data.filter(item=>{
                return item.city_name===city;
            });
           console.log('c',filterres)
           console.log('cccc', filterres[0].data[0].weather.description)
        //    console.log('cccc', filterres[0].data[0].wind_cdir_full)

           console.log('cccc', filterres[0].data[0].datetime)
            const lat=filterres[0].lat;
            const long=filterres[0].lon;
            const Name=filterres[0].city_name;
            const description=filterres[0].data[0].weather.description;
            const datetime=filterres[0].data[0].datetime;
            const description2=filterres[0].data[1].weather.description;
            const datetime2=filterres[0].data[1].datetime;
            const description3=filterres[0].data[2].weather.description;
            const datetime3=filterres[0].data[2].datetime;
            // const wind=filterres[0].data[0].wind_cdir_full;
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
                // wind:wind,
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
      <Table name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage} description={this.state.description}  datetime={this.state.datetime}  description2={this.state.description2}  datetime2={this.state.datetime2}  description3={this.state.description}  datetime3={this.state.datetime3}/>
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

