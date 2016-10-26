import React from "react";

import Recaptcha from "react-google-recaptcha";
import { Grid, Cell, Textfield, Button } from "react-mdl";
// import { } from "./../actions";

export default class SiteForm extends React.Component {
    constructor = () => {
        this.state = {};
    }
    changeRecaptcha = (e) => {
        console.log(e);
        this.setState({recaptchaResponse: e});
        // this.state.recaptcha = e;
    }
    changeInput = (e) => {
        console.log(e.target.value);
        let string = e.target.value;
        if (string.slice(0, 4).toUpperCase() === "HTTP")
            this.setState({website: e.target.value});
        else {
            this.setState({website: "http://" + string});
        }
        // console.log('here', string);
        console.log('state', this.state);
        // this.state.inputValue = e.target.value;
    }
    onSubmitHandler = () => {
        console.log('privet', this.state);
        var socket = new WebSocket("wss://serverpanel.cloud/testmysite");
        if (!socket) console.log('cannot open socket');
        else console.log(socket);
        socket.onopen = () => {
            console.log('connection established');
            socket.send(JSON.stringify(this.state));
        }
        socket.onmessage = (e) => {
            console.log('response', e.data);
        }

    }
    render = () => {
        return(
            <Grid>
                <Cell col={4}></Cell>
                <Cell col={4}>
                     <Textfield  label="http://website.com" className="siteInput" style={{width: '100%'}} onChange={this.changeInput} />
                     <Recaptcha 
                        sitekey="6LcsCQgUAAAAADadVxDgjNYFlbBk2NWpGPSPsXgh" 
                        ref="recaptcha"
                        onChange={this.changeRecaptcha}
                        className="recaptcha"
                    />
                    <div style={{textAlign: 'center'}}>
                        <Button raised accent onClick={this.onSubmitHandler}>Test It</Button>
                    </div>
                </Cell>
                <Cell col={4}></Cell>
            </Grid>
        );
    }
}

//    <div className="mdl-grid">
//                 <div className="mdl-layout-spacer"></div>
//                 <div className="mdl-cell mdl-cell--4-col">
//                     <SiteInput /><br />
//                     <Recaptcha sitekey="6LcsCQgUAAAAADadVxDgjNYFlbBk2NWpGPSPsXgh" />
//                 </div>
//                 <div className="mdl-layout-spacer"></div>
//             </div>