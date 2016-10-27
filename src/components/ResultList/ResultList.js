import React from "react";
import { List} from "react-mdl";
import ResultItem from "./ResultItem/ResultItem";
import "./ResultList.css";

export default class ResultList extends React.Component {
    render = () => {
        return(
            <List className="result-list">
               <ResultItem />
               <ResultItem />
               <ResultItem />
               <ResultItem />
            </List>
        );
    }
}