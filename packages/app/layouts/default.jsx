DefaultLayout = React.createClass({
  render() {
    return <div>
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Meteor Best Practices</a></div>
    </nav>
    <div className="container">
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
