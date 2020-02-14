import React from "react";

export default class Row extends React.Component {
	render() {
		return (
			<div className="calc-row">
				{this.props.children}
			</div>
		);
	}
}
