import React from "react";

export class Details extends React.Component {
  state = {
    details: null
  };
  componentDidMount() {
    this.fetchDetails();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchDetails();
    }
  }

  fetchDetails = () => {
    this.setState({ details: null });
    fetch(`https://swapi.co/api/people/${this.props.id}/`)
      .then(res => res.json())
      .then(details => this.setState({ details }));
  };
  render() {
    const { details } = this.state;

    return details ? (
      <div>
        <div>height: {details.height}</div>
        <div>mass: {details.mass}</div>
        <div>hair color: {details.hair_color}</div>
        <div>skin color: {details.skin_color}</div>
        <div>eye color: {details.eye_color}</div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}
