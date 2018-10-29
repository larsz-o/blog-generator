import React, {Component} from 'react'; 
import { Button, TextField, FormLabel} from '@material-ui/core';
import axios from 'axios'; 

class AddIdea extends Component {
    constructor(props){
        super(props);
        this.state = {
            idea: '', 
            hashtags: []
        }
    }
addTags = (event) => {
    this.setState({
        ...this.state, 
        hashtags: [...this.state.hashtags, event.target.value]
    })
}
handleChange = (event, property) => {
    this.setState({
        ...this.state,
        [property]: event.target.value
    })
}
submitIdea = () => {
    axios({
        method: 'POST', 
        url: '/api/idea',
        data: this.state
    })
}
    render(){
        return(
            <div>
                <FormLabel>[random quote will be here]</FormLabel><br/>
             <textarea
                type="text"
                onChange={(event)=>this.handleChange(event, 'idea')}
             />
             <FormLabel>Tags</FormLabel>
             <input
             type="text"
             onChange={(event)=>this.addTags(event)}/>
             <Button onClick={this.submitIdea}>Send it to the gods</Button>
            </div>
        );
    }
}
export default AddIdea; 