import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react";

class BaseLayout extends Component {
  render() {
    return (
      <div>
        header
        <table>
          <tr>
            <td style={{ width: 30 }}>
              Menu Items ;
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
              </ul>
            </td>
            <td>
              Content
              {this.props.children}
            </td>
          </tr>
        </table>
        header {this.props.children} <br />
        footer
      </div>
    );
  }
}

export default BaseLayout;
