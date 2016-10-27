import React from "react";
import { List} from "react-mdl";
import ResultItem from "./ResultItem/ResultItem";
import "./ResultList.css";

export default class ResultList extends React.Component {
    render = () => {
      if (this.props.status === "loading") {
         return(
            <List className="result-list">
               <ResultItem img="/img/icons---dns.png" name="Name Servers" />
               <ResultItem img="/img/icons---radar.png" name="DNS Records" />
               <ResultItem img="/img/icons---eye.png" name="Site Availability" />
               <ResultItem img="/img/icon---mailbox.png" name="Spam Lists" />
            </List>
        );
      }
      else return(<p>noep</p>);
    }
}