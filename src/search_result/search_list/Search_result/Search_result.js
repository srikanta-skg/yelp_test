import React from "react";
import styles from "./Search_result.module.css";
import BusinessRating from "./Businessrating/Business_rating";
import { Link } from "react-router-dom";
import Write_review from "../../../Write_review/Write_review";

class Search_result extends React.Component {
  render() {
    if (Boolean(this.props.value)) {
      console.log(this.props.value, "olaa");
      var image = this.props.value.image;
      var tag = this.props.value.alias;
      var phoneNumber = this.props.value.phoneNumber;
      var id = this.props.value.id;
      var location = this.props.value.location;
      var name = this.props.value.name;
      var rating = this.props.value.rating;
    }

    return (
      <div className={styles.container} id={`${name}`}>
        <img src={image} alt="business" className={styles["business-image"]} />
        <div className={styles["business-info"]}>
          <h1 className="subtitle">
            {id}. {name}{" "}
          </h1>
          <BusinessRating value={rating} />
          <p>
            {" "}
            $$ <span className="tag">{tag}</span>
          </p>
        </div>
        <div className={styles["contact-info"]}>
          <p> {phoneNumber} </p>
          <p>{location}</p>
        </div>
        {/* <div   className={styles["display_none"]}  >
                            <Write_review  value={name}/>
                        </div> */}
      </div>
    );
  }
}

export default Search_result;
