import React, { Component } from 'react';
import Data from './Data.json';
import Style from '../css/style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser : Data,
    }
  }
  
  mappingData = () => this.state.dataUser.map(value  =>  
    <td>value</td>
  ) 
    render() {
        const listItem = this.state.dataUser.map(value  => 
        <tr>
            <th>{value.Firstname}</th>
            <th>{value.Lastname}</th>
            <th>{value.Email}</th>
            <th>{value.Address}</th>
            <th>
              <div className="btn btn-warning sua"> <i className= "fa fa-edit"> edit</i></div>
              <div className="btn btn-warning sua"> <i className= "fa fa-edit"> delete</i></div>
            </th>
        </tr>
        );
        return (
            <div className="container">
              <h4 className="text"> Demo Add | Edit | Delete </h4>
              <div className="input-group mb-3">

                  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append"><button className="btn btn-outline-secondary" type="button">Button</button>
                  </div>
              </div>  
              <br/>
                <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th> System</th>
                        </tr>
                      </thead>
                        <tbody>
                          {listItem}
                       </tbody>
                 </table> 
    
              <div className="card" style={{width: '18rem'}}>
                <div className="card-header">  add</div>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="ten" />
                    <input type="text" className="form-control" placeholder="ten" />
                    <input type="text" className="form-control" placeholder="ten" />
                    <button type="submit" className="btn btn-success">submit</button>
                  </div> 
                  </div>
               </div>    
        );
      }
}

export default Home;