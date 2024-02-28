import React from "react";

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
      <>
        <div>
          <br />
          <br />
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
      </>
    );
  }
}

export default DisplayInfo;
