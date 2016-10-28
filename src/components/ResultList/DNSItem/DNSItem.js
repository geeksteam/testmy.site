import React from "react";
import { ListItem, Grid, Cell } from "react-mdl";
import "./../ResultItem.css";

export default class DNSItem extends React.Component {
	render = () => {
	
		let iconStatus = "",
			textStatus = "";
		switch (this.props.status) {
			default:
				iconStatus = "";
				textStatus = <Cell col={6} phone={6} tablet={6} className="item-text">
								<h5>{this.props.name.header}</h5>
								<p>{this.props.name.body}</p>
							</Cell>;
				break;
			case "loading":
				iconStatus = <h5><i className='material-icons color-blue'>autorenew</i></h5>;
				textStatus = <Cell col={6} className="item-text">
								<h5>{this.props.name.header}</h5>
								<p>{this.props.name.body}</p>
							</Cell>;
				break;
			case "finished":
				
				iconStatus = this.props.result ? <h5><i className='material-icons color-green'>done</i></h5> : <h5><i className='material-icons color-red'>highlight_off</i></h5>;
				textStatus = <Cell col={6} className="item-text">
								<h5>{this.props.name.header[0]}</h5>
								<p>{this.props.result ? JSON.stringify(this.props.result) : this.props.name.fail[0]}</p>
								<h5>{this.props.name.header[1]}</h5>
								<p>{this.props.name.fail[1]}</p>							
							</Cell>;
				break;
		}
		return(
			 <ListItem className="result-item">
			 	<Grid>
			 		<Cell col={5} phone={5} tablet={5} className="item-img"><img src={this.props.img} /></Cell>
			 		<Cell col={1} phone={1} tablet={5} className="item-text">
					 	{iconStatus}
					</Cell>
			 		{textStatus}
			 	</Grid>
			 </ListItem>
		);
	}
}