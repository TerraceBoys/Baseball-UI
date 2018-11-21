import React, { Component, PropTypes } from "react";
import "./../../styles/spotify.css";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import SimpleHeader from "../../components/SimpleHeader";

const mapDispatchToProps = {
  pushRoute: push
};

class SpotifyContainer extends Component {
  render() {
    const { children, pushRoute } = this.props;
    return (
      <div className="spotify-container">
        <SimpleHeader
          headerClass="spotify-header"
          headerText="Party Boys"
          pushRoute={pushRoute}
        />
        <div className="spotify-content">{children}</div>
      </div>
    );
  }
}

SpotifyContainer.propTypes = {
  pushRoute: PropTypes.func.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(SpotifyContainer);
