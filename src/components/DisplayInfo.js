import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    return (
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <p>My name is {user.name}</p>
              <p>My age is {user.age}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
