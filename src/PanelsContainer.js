import React from 'react';
import './Panels.css';
import RightPanel from './RightPanel.js'
import LeftPanel from './LeftPanel.js'
import Request from './Request.js'


class PanelsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mockData: [],
            selectedCustomer: {},
         };
    }

    componentDidMount() {
        this.getMockData();
    }

    getMockData = () => {
        console.log('mockData fetch is running')
        // this belongs in a hidden / ignored .env file.
        const PRIVATE_API_KEY = "ANP7-8PQ0-4Q9J-YCDP"
        const REF_ID = "ezi2fgnp"
        const RESULTS_NEEDED = 1 // set to 10 when you're ready to go live
      
        fetch(`https://randomapi.com/api/${REF_ID}?key=${PRIVATE_API_KEY}&results=${RESULTS_NEEDED}`)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            this.setState({ mockData: data.results });
      })
    }

    toggleRightPanel = (itemId) => {

        // find item in data array by id and pass...
        // the item to the LeftPanel
    }

    
    render() {
        const { mockData, selectedCustomer } = this.state;

      return (
          <div>
            <div>
                <LeftPanel data={mockData}/>
            </div>
            <div>
                <RightPanel selectedCustomer={selectedCustomer}/>
            </div>
            
          </div>
      )
        }
    
}
      

export default PanelsContainer;
