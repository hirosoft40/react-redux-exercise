import React, { Component } from "react";
import { Link } from "react-router-dom";

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        header
        <table>
          <tbody>
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
          </tbody>
        </table>
        <br />
        footer
      </div>
    );
  }
}

export default BaseLayout;
