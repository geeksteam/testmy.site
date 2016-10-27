import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; 

import Header from "./../Header/Header";
import ResultList from "./../ResultList/ResultList";

import Recaptcha from "react-google-recaptcha";
import { Grid, Cell, Textfield, Button } from "react-mdl";
import './SiteForm.css';
import { submitForm } from "./../../store/actions/siteFormActions";

class SiteForm extends React.Component {
    constructor() {
        super();
        this.state = {className: "hidden"};
        // this.setState({className: "hidden"});        
        // this.setState({show: false});
    }
    
    changeRecaptcha = (e) => {
        console.log(e);
        this.setState({recaptchaResponse: e});
        // this.state.recaptcha = e;
    }

    changeVisibility = () => {
        // this.setState({show: true});
        this.setState({className: "show"});
    }

    changeInput = (e) => {
        // console.log(e.target.value);
        let string = e.target.value;
        if (string.slice(0, 4).toUpperCase() === "HTTP")
            this.setState({website: e.target.value});
        else {
            this.setState({website: "http://" + string});
        }
        // console.log('here', string);
        // console.log('state', this.state);
        // this.state.inputValue = e.target.value;
    }

    onSubmitHandler = () => {
        // console.log('privet', this.state);
        this.props.submitForm(this.state);
    }

    render = () => {
        // console.log(this.state);
        return(
            <Grid>
                <Cell col={6} tablet={8} phone={8} offsetDesktop={3} offsetTablet={0} offsetPhone={0}>
                    <Header className="header-logo" />
                     
                     <Textfield  label="http://website.com" 
                     className="siteInput" style={{width: '100%'}} 
                     onChange={this.changeInput}
                     onClick={this.changeVisibility} />
                     <div className={this.state.className}>
                        <Recaptcha 
                            sitekey="6LcsCQgUAAAAADadVxDgjNYFlbBk2NWpGPSPsXgh" 
                            ref="recaptcha"
                            onChange={this.changeRecaptcha}
                            className="recaptcha"
                            />
                        <div style={{textAlign: 'center'}}>
                            <Button raised accent onClick={this.onSubmitHandler} className="test-bottom">Test It</Button>
                        </div>
                    </div>
                </Cell>
                <Cell col={8} offsetDesktop={2}>
                    <ResultList status={this.props.status} response={this.props.response} />
                </Cell>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        status: state.changeStatusReducer.status,
        response: state.addReSponseReducer
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitForm
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteForm);