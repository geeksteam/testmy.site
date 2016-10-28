import React from "react";
import { List} from "react-mdl";
// import ResultItem from "./ResultItem/ResultItem";
import NameServersItem from "./NameServersItem/NameServersItem";
import "./ResultList.css";

export default class ResultList extends React.Component {
	render = () => {
		let nameStart = [],
			nameLoading = [],
			nameFinished = [];
		// start state
		nameStart[0] = {
			header: "Very fast",
			body: "We are using hundreds of checkers around the world so we are check your website incredibly fast."
		};

		nameStart[1] = {
			header: "Googe Cloud Powered",
			body: "Our checkers backed by Google Cloud Platform, google and check site availability from search engine network."
		};

		nameStart[2] = {
			header: "Consistency",
			body: "We are checking your web site from minimum two checkers from different locations and subnetworks. That’s why you will get consistent check result. "
		};

		nameStart[3] = {
			header: "Notify when something wrong",
			body: "Coming soon..."
		};

		// loading state
		nameLoading[0] = {
			header: "Name Servers:"
		}

		nameLoading[1] = {
			header: "DNS Records:"
		};

		nameLoading[2] = {
			header: "Site Availability:"
		};

		nameLoading[3] = {
			header: "Spam Lists:"
		};

		// finished state
		nameFinished[0] = {
			header: ["Name Servers:", ""],
			fail: ["No nameservers found.", ""]
		};

		nameFinished[1] = {
			header: ["A Records:", "MX Records:"],
			fail: ["No records found.", "No records found."]
		};

		nameFinished[2] = {
			header: ["Site Availability:", "Checked by:"],
			fail: ["Connection timeout.", "No checkers found."]
		};

		nameFinished[3] = {
			header: ["Spam Lists:", ""],
			fail: ["dnsbl.sorbs.net\n77.22.111.1", "zen.spamhaus.org\n77.222.111.11"]
		};

		return(
			<List className="result-list">
				<NameServersItem status={this.props.status} result={this.props.response.DNS} />
			</List>
		);

		// switch (this.props.status) {
		// 	default:
		// 		return(
		// 			<List className="result-list">
		// 				<ResultItem img="/img/icon-speed.png" name={nameStart[0]} status={this.props.status} />
		// 				<ResultItem img="/img/icon---google-cloud.png" name={nameStart[1]} status={this.props.status} />
		// 				<ResultItem img="/img/icon-consistency.png" name={nameStart[2]} status={this.props.status} />
		// 				<ResultItem img="/img/icon---robot.png" name={nameStart[3]} status={this.props.status} />
		// 			</List>
		// 		);
		// 	case "loading":
		// 		return(
		// 			<List className="result-list">
		// 				<ResultItem img="/img/icons---dns.png" name={nameLoading[0]} status={this.props.status} />
		// 				<ResultItem img="/img/icons---radar.png" name={nameLoading[1]} status={this.props.status} />
		// 				<ResultItem img="/img/icons---eye.png" name={nameLoading[2]} status={this.props.status} />
		// 				<ResultItem img="/img/icon---mailbox.png" name={nameLoading[3]} status={this.props.status} />
		// 			</List>
		// 		);
		// 	case "finished":
		// 	let obj = Object.assign({}, this.props.response.DNS.MX);
		// 	obj.A = this.props.response.DNS.A;
		// 		return(
		// 			<List className="result-list">
		// 				<ResultItem img="/img/icons---dns.png" name={nameFinished[0]} status={this.props.status} result={this.props.response.DNS} />
		// 				<ResultItem img="/img/icons---radar.png" name={nameFinished[1]} status={this.props.status} result={obj} />
		// 				<ResultItem img="/img/icons---eye.png" name={nameFinished[2]} status={this.props.status} result={this.props.response.CloudChecker} />
		// 				<ResultItem img="/img/icon---mailbox.png" name={nameFinished[3]} status={this.props.status} result={this.props.response.SpamCheck} />
		// 			</List>
		// 		);
		// }
	}
}