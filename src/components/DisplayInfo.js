import React from "react";
import "./DisplayInfo.scss";

import logo from "../../src/logo.svg";
class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">>> 1. Call to constructor");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  componentDidMount() {
    console.log(">>> 2. Component did mount");
    setTimeout(() => {
      document.title = "Welcome to my website";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>> 3. Component did update");
    console.log("prevProps", prevProps);
    console.log("props now", this.props);
    if (prevProps.listUsers !== this.props.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("5 users already!");
      }
    }
  }

  render() {
    console.log(">>> Call to render");
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
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <p>My name is {user.name}</p>
                  <p>My age is {user.age}</p>
                  <button
                    onClick={() => {
                      this.props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
