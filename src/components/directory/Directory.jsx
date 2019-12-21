import React, { Component } from "react";
import MenuItem from "../menu-items/MenuItem";
import "./directory.scss";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://sc01.alicdn.com/kf/HTB1xDwiXOzxK1RjSspjq6AS.pXaY/ACAP-Brand-Custom-Good-Quality-Blank-No.jpg_350x350.jpg",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "jackets"
        },
        {
          title: "sneakers",
          imageUrl:
            "https://media.gq.com/photos/5d6fd5e28be23e0008f3391c/master/pass/Big-Collab-Sneakers-GQ-2019-090419.jpg",
          id: 3,
          linkUrl: "sneakers"
        },
        {
          title: "womens",
          imageUrl:
            "https://www.sportsdirect.com/images/marketing/Ladies-T-Shirts-mobile.jpg",
          size: "large",
          id: 4,
          linkUrl: "womens"
        },
        {
          title: "mens",
          imageUrl:
            "https://cdn.thegentlemansjournal.com/wp-content/uploads/2016/06/Adam-Gallagher-900x600-c-center.jpg",
          size: "large",
          id: 5,
          linkUrl: "mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
