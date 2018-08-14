import React, { Component, Fragment } from 'react';
import PubSub from 'pubsub-js';

import SearchContainer from './components/search-container';
import Emaillist from './components/email-list';
import EmailInfo from './components/email-info';
import SelectActions from './components/select-actions'

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			mails: [],
			totalMails: 0,
			mailsCheckeds: 0
		};
	}

	componentDidMount() {
		fetch('http://localhost:9090/?token=miGueLit0&alecrim=111')
		.then((response) => response.json())
		.then((json) => {
			this.setState({
				mails: json,
				totalMails: json.length
			});
		});

		PubSub.subscribe('update-checked-email-counter', (topic, isChecked) => {
			((isChecked === true) ? this.setState({mailsCheckeds: this.state.mailsCheckeds + 1}) : this.setState({mailsCheckeds: this.state.mailsCheckeds - 1}))
		})
	}

	render() {
		return (
			<Fragment>
				<SearchContainer />
				<div className="manager">
					<SelectActions totalMails={this.state.totalMails} mailsCheckeds={this.state.mailsCheckeds}/>
				</div>
				<div className="container">
					<Emaillist  emailsList={this.state.mails}/>
					<EmailInfo />
				</div>
			</Fragment>
		);
	}
}

export default App;
