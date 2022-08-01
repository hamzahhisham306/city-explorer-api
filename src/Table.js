import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

class DarkExample extends React.Component {
    render(){
  return (
    <>
    <ul>
      <li>the description: {this.props.description}</li>
      <li>dateTime:  {this.props.datetime}</li>
    </ul>
    <ul>
      <li>the description: {this.props.description2}</li>
      <li>dateTime:  {this.props.datetime2}</li>
    </ul>
    <ul>
      <li>the description: {this.props.description3}</li>
      <li>dateTime:  {this.props.datetime3}</li>
    </ul>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Display_Name</th>
          <th>latitude</th>
          <th>longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{1}</td>
          <td>{this.props.name}</td>
          <td>{this.props.lat}</td>
          <td>{this.props.long}</td>
        </tr>
      </tbody>
    </Table>
    <img src={this.props.urlImage} alt="CityImage" />
    </>
  );
    }
}

export default DarkExample;