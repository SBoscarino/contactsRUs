import React from 'react';
import './Panels.css';
import RightPanel from './RightPanel.js'
import LeftPanel from './LeftPanel.js'

class PanelsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mockData: [],
            selectedCustomer: {},
            dataReceived: false,
         };
    }

    componentDidMount() {
        const { dataReceived } = this.state
        // we don't want to re-render/ get fresh data if we are just changing the state.
        if (!dataReceived){
            this.getMockData();
        }
    }

    handleClick = (customer) => {
        this.setState({selectedCustomer: customer})
      }

    getMockData = () => {
        // this belongs in a ignored .env file.
        const PRIVATE_API_KEY = "ANP7-8PQ0-4Q9J-YCDP"
        const REF_ID = "ezi2fgnp"
        const RESULTS_NEEDED = 10
      
        fetch(`https://randomapi.com/api/${REF_ID}?key=${PRIVATE_API_KEY}&results=${RESULTS_NEEDED}`)
        .then(response => response.json())
        .then((data)=>{
            this.setState({ mockData: data.results, dataReceived: true });
      })
    }

    render() {
        const { mockData, selectedCustomer } = this.state;

        return (
            <div className="MainContainer">
                <div className="LeftContainer">
                    <LeftPanel onClick={this.handleClick} data={mockData}/>
                </div>
                <div className="RightContainer">
                    <RightPanel selectedCustomer={selectedCustomer}/>
                </div>
            </div>
        )
    }
}

export default PanelsContainer;