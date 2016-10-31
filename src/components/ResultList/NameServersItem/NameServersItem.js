import React from "react";
import { ListItem, Grid, Cell, Spinner } from "react-mdl";
import "./../ResultItem.css";

export default class NameServersItem extends React.Component {
	constructor() {
		super();
		this.names = [
			{
				header: "Very fast",
				body: "We are using hundreds of checkers around the world so we are check your website incredibly fast.",
				img: "/img/icon-speed.png"
			},
			{
				header: "Name Servers:",
				img: "/img/icons---dns.png"
			},
			{
				header: "Name Servers:",
				fail: "No nameservers found."
			}
		];
	}
	render = () => {;
		
		switch(this.props.status) {
			default:
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[0].img} alt="icon-dns" /></h5>
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
								<h5><img src={this.names[1].img} alt="icon-dns" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5><Spinner singleColor className="color-blue" />{this.names[1].header}</h5>
							</Cell>
						</Grid>
					</ListItem>
				);
			case "finished":
				console.log('HERE', this.props.result);
				let result = "", icon = "";
				if (this.props.result.NameServers) {
					result = this.props.result.NameServers.map(function(item, index) {
						return(<li key={index}>{item}</li>);
					});
					icon = <i className='material-icons color-green'>done</i>;
				}
				else {
					result = <li>{this.names[2].fail}</li>;
					icon = <i className='material-icons color-red'>highlight_off</i>;
				}
				console.log('RESULT IS', result);		
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[1].img} alt="icon-dns" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5>{icon}<span>{this.names[1].header}</span></h5>
									<ul>
										{result}
									</ul>
							</Cell>
						</Grid>
					</ListItem>
				);			
		}
		
	}
}