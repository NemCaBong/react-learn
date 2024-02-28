import React from "react";
import "./DisplayInfo.scss";

import logo from "../../src/logo.svg";
class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    const { listUsers } = this.props;
    return (
      <div className="display-info-container">
        <img src={logo} alt="logo" />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser ? "Hide" : "Show"} list user:
          </span>
        </div>

        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <p>My name is {user.name}</p>
                  <p>My age is {user.age}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
