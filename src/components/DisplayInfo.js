import React, { useState } from "react";
import "./DisplayInfo.scss";

// class DisplayInfo extends React.Component {
//   handleShowHide = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };

//   render() {
//     console.log(">>> Call to render");
//     const { listUsers } = this.props;
//     return (
//       <div className="display-info-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <p>My name is {user.name}</p>
//                   <p>My age is {user.age}</p>
//                   <button
//                     onClick={() => {
//                       this.props.handleDeleteUser(user.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;
  // Chúng ta dùng const để cho biết rằng biến chỉ có thể đc thay đổi
  // thông qua biến setState kia mà thôi
  const [isShowHideListUser, setIsShowHideListUser] = useState(true);
  // func

  const handleShowHide = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

  return (
    <div className="display-info-container">
      <div>
        <span
          onClick={() => {
            handleShowHide();
          }}
        >
          {isShowHideListUser ? "Hide" : "Show"} list user
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <p>My name is {user.name}</p>
                <p>My age is {user.age}</p>
                <button
                  onClick={() => {
                    props.handleDeleteUser(user.id);
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
};

export default DisplayInfo;
