import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const {
      history,
      location: {state},
    } = this.props;
    if (state === undefined) {
      history.push('/');
    }
  }
  render() {
    const {
      location: {state},
    } = this.props;
    if (state) {
      return (
        <div>
          <img src={state.poster} title={state.title} alt={state.title}></img>
          <h1> ✅ title : {state.title}</h1>
          <h2>summary : {state.summary.slice(0, 100)}...</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
