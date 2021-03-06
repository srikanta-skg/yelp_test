import React from "react";
import styles from "./Search_Bar.module.css";
import { withRouter } from 'react-router-dom';

class Search_Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "", location: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, this.state.term, this.state.location);
  }

 // https://www.yelp.com/search?find_desc=Restaurants&find_loc=berlin

  submit(event) {
    event.preventDefault();
    const team_url = encodeURI(this.state.term)
    const location_url = encodeURI(this.state.location)
    this.props.history.push( `/search?find_desc=${team_url}&find_loc=${location_url}`  );
    // alert("You are submitting " + this.state.term);
    console.log(this.state.term, "hello sri ur close man do this brooo");
     event.preventDefault(); 
  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)} >
        <div className={styles.container}>
          <div>
            <div className="field has-addons">
              <p className="control">
                <a className={`button is-static`}>Find</a>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  name = 'term'
                  onChange={this.handleChange} 
                  placeholder="plumbers, delivery, takeout"
                />
              </p>

              <p className="control">
                <a className="button is-static">Near</a>
              </p>

              <p className="control">
                <input
                  className={`input  ${styles["search_bar_shape"]}`}
                  type="text"
                  name = 'location'
                  onChange={this.handleChange} 
                  placeholder="address, neighorhood, city, state"
                />
              </p>

              <div>
                <button type="submit" className={`button ${styles.button_red}`} onClick={this.submit.bind(this)}>
                  <span className="icon">
                    <i className="fas fa-search"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

// export default Search_Bar;
export default withRouter(Search_Bar); 
