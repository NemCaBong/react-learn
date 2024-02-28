//  class component

// function component: 16.8 thì nó có tác dụng giống hệt
// class component. Trc đó thì nó ko có tác dụng gì khi không dùng với hooks.
import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Hoàng",
    age: 21,
    address: "Hà Nội",
  };

  // render() là phương thức bắt buộc phải có của class component
  // tập hợp các thẻ html rồi trả ra màn hình
  // sử dụng cú pháp JSX để viết html
  // giúp mình viết JS bên trong code html

  // bên trong JSX có thể trả về chỉ là 1 khối mà thôi
  // nếu trả về 2 cái div thì lỗi ngay
  render() {
    return (
      <div>
        <h1>Hello, I'm a {this.state.name}</h1>
        <p>
          This is the {Math.round(Math.random() * 10)} times i have written JSX
        </p>
      </div>
    );
  }
}

export default MyComponent;
