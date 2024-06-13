import React from "react";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types"

function PrivateRoute({ component, ...rest }) {
	const user = localStorage.getItem("codeburger:userData")

	if (!user) {
		return <Redirect to="/login"></Redirect>
	}

	return <Route {...rest} component={component}></Route>
}

export default PrivateRoute
PrivateRoute.propTypes = {
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
