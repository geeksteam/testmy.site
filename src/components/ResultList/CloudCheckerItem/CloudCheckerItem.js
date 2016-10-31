import React from "react";
import { ListItem, Grid, Cell, Spinner } from "react-mdl";
import "./../ResultItem.css";

export default class CloudCheckerItem extends React.Component {
	constructor() {
		super();
		this.names = [
			{
				header: "Consistency",
				body: "We are checking your web site from minimum two checkers from different locations and subnetworks. That’s why you will get consistent check result.",
				img: "/img/icon-consistency.png"
			},
			{
				header: "Site Availability:",
				img: "/img/icons---eye.png"
			},
			{
				header: ["Site Availability:", "Checked by:"],
				fail: ["Connection timeout.", "No checkers found."],
				success: ["HTTP Code: 200", "No Errors"]
			}
		];
	}
	render = () => {
		switch(this.props.status) {
			default:
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[0].img} alt="icon-consistency" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text item-default">
								<h5>{this.names[0].header}</h5>
								<p>{this.names[0].body}</p>
							</Cell>
						</Grid>
					</ListItem>
				);
			case "loading":
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[1].img} alt="icon-eye" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5><Spinner singleColor className="color-blue" />{this.names[1].header}</h5>
							</Cell>
						</Grid>
					</ListItem>
				);
			case "finished":
				console.log('HERE', this.props.result);
				// console.log('names', this.names[2].success);
				let resultHTTP, resultError, resultCheckers, iconHTTP, iconError, iconCheckers, iconHeader1;
				//checking HTTP status
				if (this.props.result.HTTPCode === 200) {
					// iconHTTP = <i className='material-icons color-green'>done</i>;					
					resultHTTP = <li><i className='material-icons color-green'>done</i>{this.names[2].success[0]}</li>;
					iconHeader1 = <i className='material-icons color-green'>done</i>;
				}
				else {
					resultHTTP = <li><i className='material-icons color-red'>highlight_off</i>{this.names[2].fail[0]}</li>;
					// iconHTTP = <i className='material-icons color-red'>highlight_off</i>;
					iconHeader1 = <i className='material-icons color-red'>highlight_off</i>;
				}

				//checking Errors
				if (this.props.result.ErrorCode === 0) {
					resultError = <li><i className='material-icons color-green'>done</i>{this.names[2].success[1]}</li>;
					iconHeader1 = <i className='material-icons color-green'>done</i>;
					// iconError = <i className='material-icons color-green'>done</i>;
				}
				else {
					resultError = <li><i className='material-icons color-red'>highlight_off</i>{this.names[2].fail[0]}</li>;
					resultHTTP = "";				
					// iconError = <i className='material-icons color-red'>highlight_off</i>;
					iconHeader1 = <i className='material-icons color-red'>highlight_off</i>;					
				}

				//checking checkers
				if (this.props.result.CheckerIP) {
					resultCheckers = this.props.result.CheckerIP.map((item, index) => {
						return(<li key={index}>
							<span><img src="/img/icon---google-cloud.png" alt="icon-google-cloud" /></span>
							<span>{item.ip}<br/>{item.region}</span>							
						</li>);
					});
					iconCheckers = iconHTTP = <i className='material-icons color-green'>done</i>;
				}
				else {
					resultCheckers = <li>{this.names[2].fail[2]}</li>;
					iconCheckers = <i className='material-icons color-red'>highlight_off</i>;
				}
				
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[1].img} alt="icon-eye" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5>{iconHeader1}<span>{this.names[2].header[0]}</span></h5>
									<ul>
										{resultHTTP}
										{resultError}
									</ul>
								<h5>{iconCheckers}<span>{this.names[2].header[1]}</span></h5>
									<ul className="picture-list">
										{resultCheckers}
									</ul>
							</Cell>
						</Grid>
					</ListItem>
				);			
		}
		
	}
}