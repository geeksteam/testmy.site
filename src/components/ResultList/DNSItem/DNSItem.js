import React from "react";
import { ListItem, Grid, Cell, Spinner } from "react-mdl";
import "./../ResultItem.css";

export default class DNSItem extends React.Component {
	constructor() {
		super();
		this.names = [
			{
				header: "Googe Cloud Powered",
				body: "Our checkers backed by Google Cloud Platform, google and check site availability from search engine network.",
				img: "/img/icon---google-cloud.png"
			},
			{
				header: "DNS Records:",
				img: "/img/icons---radar.png"
			},
			{
				header: ["A Records:", "MX Records:"],
				fail: "No records found."
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
								<h5><img src={this.names[0].img} alt="icon-radar" /></h5>
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
								<h5><img src={this.names[1].img} alt="icon-radar" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5><Spinner singleColor className="color-blue" />{this.names[1].header}</h5>
							</Cell>
						</Grid>
					</ListItem>
				);
			case "finished":
				console.log('HERE', this.props.result);
				let resultA, resultMX , iconA, iconMX;
				if (this.props.result.A) {
					if (typeof this.props.result.A === "object") {
						resultA = this.props.result.A.map(function(item, index) {
							return(<li key={index}>{item}</li>);
						});
					}
					else {
						resultA = this.props.result.A;
					}
					iconA = <i className='material-icons color-green'>done</i>;
				}
				else {
					resultA = <li>{this.names[2].fail}</li>;
					iconA = <i className='material-icons color-red'>highlight_off</i>;
				}
				if (this.props.result.MX) {
					resultMX = this.props.result.MX.map(function(item, index) {
						return(<li key={index}>{item}</li>);
					});
					iconMX = <i className='material-icons color-green'>done</i>;
				}
				else {
					resultMX = <li>{this.names[2].fail}</li>;
					iconMX = <i className='material-icons color-red'>highlight_off</i>;
				}
				console.log('RESULT IS', resultA, resultMX);		
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[1].img} alt="icon-radar" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5>{iconA}<span>{this.names[2].header[0]}</span></h5>
									<ul>
										{resultA}
									</ul>
								<h5>{iconMX}<span>{this.names[2].header[1]}</span></h5>
									<ul>
										{resultMX}
									</ul>
							</Cell>
						</Grid>
					</ListItem>
				);			
		}
		
	}
}