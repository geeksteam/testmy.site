import React from "react";
import { ListItem, Grid, Cell } from "react-mdl";
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
	render = () => {
		let iconStatus = "",
			imgStatus = "",
			textStatus = "";
		
		switch(this.props.status) {
			default:
				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={5} tablet={5} className="item-img"><img src={this.names[0].img} /></Cell>
							<Cell col={7} phone={7} tablet={7} className="item-text">
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
							<Cell col={5} phone={5} tablet={5} className="item-img"><img src={this.names[1].img} /></Cell>
							<Cell col={7} phone={7} tablet={7} className="item-text">
								<h5><i className='material-icons color-blue'>autorenew</i>{this.names[1].header}</h5>
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
							<Cell col={5} phone={5} tablet={5} className="item-img"><img src={this.names[1].img} /></Cell>
							<Cell col={7} phone={7} tablet={7} className="item-text">
								<h5>{icon}{this.names[1].header}</h5>
							
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