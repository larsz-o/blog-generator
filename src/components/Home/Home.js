import React, {Component} from 'react'; 
import { Button, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core';
import axios from 'axios'; 
import swal from 'sweetalert';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
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
    handleClose = () => {
        this.setState({
            ...this.state, 
            open: false
        })
    }
    handleOpen = () => {
        this.setState({
            open: true
        })
    }
    submitIdea = () => {
        this.setState({
            open: false
        })
        axios({
            method: 'POST', 
            url: '/api/ideas',
            data: this.state
        }).then((response) => {
            swal('success', 'You are genius', 'success')
        }).catch((error) => {
            console.log('Error posting idea');
            swal('danger', 'Something went wrong', 'danger')
        })
    }
    render(){
        return(
            <div>
                <h1>Hello, I am a blog generator</h1>
                <div className="button-div">
                    <Button color="primary" variant="contained" onClick={this.handleOpen}>Add Some Ideas</Button>
                </div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}>
                        <DialogTitle>Add New Idea</DialogTitle>
                        <DialogContent>
                                <textarea
                                rows="4" cols="50"
                                onChange={(event)=>this.handleChange(event, 'idea')}/><br/>
                            <DialogActions>
                                <Button variant="contained" color="secondary" onClick={this.submitIdea}>Submit</Button>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
                <div className="button-div">
                    <Button color="secondary" variant="contained" onClick={()=>this.props.history.push('/ideas')}>Give Me Some Ideas</Button>
                </div>
            </div>
        );
    }
}
export default HomePage; 