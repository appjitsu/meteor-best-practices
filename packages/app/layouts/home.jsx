HomeLayout = React.createClass({
  render() {
    return <div>
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Meteor Best Practices</a></div>
    </nav>
    <div className="section no-pad-bot" id="index-banner">
    <div className="container">
      <h1 className="header center orange-text">Meteor Best Practices</h1>
      <div className="row center">
        <h5 className="header col s12 light">A modern meteor web application based on React and FlowRouter.</h5>
      </div>
      <div className="row center">
        <a href="https://github.com/appjitsu/meteor-best-practices" id="github-button" className="btn-large waves-effect waves-light orange">Contribute!</a>
      </div>
    </div>
    </div>
    <div className="container">
      <div className="section">

      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Current Stack</span>
              <div className="collection">
                <div className="collection-item hoverable"><a href="http://info.meteor.com/blog/announcing-meteor-1.2" target="_blank">Meteor 1.2</a></div>
                <div className="collection-item hoverable"><a href="http://facebook.github.io/react/" target="_blank">ReactJS</a></div>
                <div className="collection-item hoverable"><a href="https://github.com/kadirahq/flow-router" target="_blank">FlowRouter</a></div>
                <div className="collection-item hoverable"><a href="https://www.mongodb.org/" target="_blank">MongoDB</a></div>
                <div className="collection-item hoverable"><a href="http://materializecss.com/" target="_blank">Materialize CSS</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

   	  {this.props.content}

    </div>
    <footer className="page-footer orange">
    <div className="footer-copyright">
      <div className="container">
        Made by <a className="orange-text text-lighten-3" href="http://www.jasonleecochran.com">Jason Cochran</a> with <a className="orange-text text-lighten-3" href="http://www.meteor.com" target="_blank">Meteor</a> and <a className="orange-text text-lighten-3" href="http://facebook.github.io/react/" target="_blank">React</a>.
      </div>
    </div>
    </footer>
    </div>;
  }
});
