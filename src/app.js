/**
 * App entry
 */

var Header = require('./components/header')
var SidebarLeft = require('./components/sidebar-left')
var Playground = require('./components/playground')
var SidebarRight = require('./components/sidebar-right')

var App = React.createClass({
	getInitialState() {
		return {
			test: 'tes'
		}
	},
	render() {
		return (<div className="app-container"> 
			<Header/>
			<div className="app-body">
				<SidebarLeft />
				<Playground />
				<SidebarRight />
			</div>
		</div>)
	}
})

React.render(<App/>, document.getElementById('App'))