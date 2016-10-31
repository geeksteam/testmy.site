import React from "react";
import { ListItem, Grid, Cell, Spinner } from "react-mdl";
import "./../ResultItem.css";

export default class SpamCheckItem extends React.Component {
	constructor() {
		super();
		this.names = [
			{
				header: "Notify when something wrong",
				body: "Coming soon...",
				img: "/img/icon---robot.png"
			},
			{
				header: "Spam lists:",
				img: "/img/icon---mailbox.png"
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
								<h5><img src={this.names[0].img} alt="icon-robot" /></h5>
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
								<h5><img src={this.names[1].img} alt="icon-mailbox" /></h5>
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
				let resultCheck1, resultCheck2, iconCheck1, iconCheck2, iconHeader;
				//checking HTTP status
				//zen.spamhaus.org
				//"dnsbl.sorbs.net"
				if (this.props.result["zen.spamhaus.org"].results == undefined) {
					resultCheck1 = <li><i className='material-icons color-red'>highlight_off</i>216.58.209.78</li>
					iconHeader = <i className='material-icons color-red'>highlight_off</i>;	
				}
				else {
					resultCheck1 = <li><i className='material-icons color-green'>done</i>{this.props.result["dnsbl.sorbs.net"].results[0].address}</li>
					iconHeader = <i className='material-icons color-green'>done</i>;
				}

				if (this.props.result["zen.spamhaus.org"].results == undefined) {
					resultCheck2 = <li><i className='material-icons color-red'>highlight_off</i>216.58.209.78</li>
					iconHeader = <i className='material-icons color-red'>highlight_off</i>;	
				}
				else {
					resultCheck2 = <li><i className='material-icons color-green'>done</i>{this.props.result["zen.spamhaus.org"].results[0].address}</li>
					iconHeader = <i className='material-icons color-green'>done</i>;
				}

				// if (this.props.result["dnsbl.sorbs.net"].results[0].listed !== true) {
				// 	resultCheck1 = <li><i className='material-icons color-green'>done</i>{this.props.result["dnsbl.sorbs.net"].results[0].address}</li>
				// 	iconHeader = <i className='material-icons color-green'>done</i>;
				// 	// resultCheck1 = <li>{this.props.result["dnsbl.sorbs.net"].list}</li>;
				// }
				// else {
				// 	resultCheck1 = <li><i className='material-icons color-red'>highlight_off</i>{this.props.result["dnsbl.sorbs.net"].results[0].address}</li>
				// 	iconHeader = <i className='material-icons color-red'>highlight_off</i>;		
				// }

				// if (this.props.result["zen.spamhaus.org"].results[0].listed !== true) {
				// 	resultCheck2 = <li><i className='material-icons color-green'>done</i>{this.props.result["zen.spamhaus.org"].results[0].address}</li>
				// 	iconHeader = <i className='material-icons color-green'>done</i>;
				// }
				// else {
				// 	resultCheck2 = <li><i className='material-icons color-red'>highlight_off</i>{this.props.result["zen.spamhaus.org"].results[0].address}</li>
				// 	iconHeader = <i className='material-icons color-red'>highlight_off</i>;	
				// }

				return(
					<ListItem className="result-item">
						<Grid>
							<Cell col={5} phone={2} tablet={4} className="item-img">
								<h5><img src={this.names[1].img} alt="icon-mailbox" /></h5>
							</Cell>
							<Cell col={7} phone={2} tablet={4} className="item-text">
								<h5>{iconHeader}<span>{this.names[1].header}</span></h5>
									<ul>
										<li>{this.props.result["dnsbl.sorbs.net"].list}</li>
										{resultCheck1}
										<li>{this.props.result["zen.spamhaus.org"].list}</li>
										{resultCheck2}
									</ul>
							</Cell>
						</Grid>
					</ListItem>
				);			
		}
		
	}
}