import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchData } from "../redux/modules/data";

class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData());
    }

    render() {
        const { data } = this.props;
        return (
            <React.Fragment>
                <h1>React Boilerplate!</h1>
                <div>
                    {
                        data.cities.map((city, index) => {
                            return(
                                <div key={index}>{city}</div>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(App);