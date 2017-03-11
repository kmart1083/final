var React = require('react');
var NavBarItem = require('./NavBarItem')


var SortBar = React.createClass({
  render: function() {
    return (
      <div className="sort row">
        <div className="col-sm-12">
          <ul className="nav nav-pills">
            <NavBarItem view="latest" title="By Release Date" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="alpha" title="A to Z" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <NavBarItem view="map" title="Theater Map" currentView={this.props.currentView} viewChanged={this.props.viewChanged} />
            <li className="nav-text pull-right">{this.props.movieCount} movies</li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = SortBar;
