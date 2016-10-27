import React from "react";
import { ListItem, Grid, Cell } from "react-mdl";
import "./ResultItem.css";

export default class ResultItem extends React.Component {
    render = () => {
        return(
             <ListItem className="result-item">
             	<Grid>
             		<Cell col={4}><img src={this.props.img} /></Cell>
             		<Cell col={8}>{this.props.name}</Cell>
             	</Grid>
             </ListItem>
        );
    }
}