import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import Slider from '../components/preferenceSlider'
import Address from '../components/address'
import getScores from '../actions/getScores'

const categories = ['Safety', 'Food', 'Transportation', 'Parks', 'Nightlife'];
const attributes = ["accidents", "crime", "restaurants", "subways", "bikes", "parks", "bars"]
const PreferencesSlidersContainer = class extends Component {
  componentWillMount(){
    this.props.getScores(sessionStorage.address)
  }
  componentWillReceiveProps(nextProps){
    var scores = nextProps.scores.data
    attributes.map((key) => {
      let keys = Object.keys(scores)
      return keys.filter((k) => {return k !== 'boro' && k !== 'neighborhood'}).forEach((k) => {
        sessionStorage[k + " " + key] = scores[k][key]
      })
    })
    sessionStorage['boro'] = nextProps.scores.data.boro
    sessionStorage['neighborhood'] = nextProps.scores.data.neighborhood
  }
  render() {
    return(
      <div className="slider-pref">
        <Address text={this.props.address}/>
        <form onSubmit={this.props.handleSubmit.bind(this)}>
          {categories.map((category, idx) => {
            return(
                <div id="slider">
                  <label>{category}</label>
                  <Slider handleClick={this.props.handleClick} key={idx} category={category} id={category}/>
                </div>
            )
          })}
          <input id="submitForm" type="submit" />
        </form>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPreferences, getScores}, dispatch)
}

function mapStateToProps(state) {
  return {address: state.address.address, preferences: state.preferences, scores: state.scores}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesSlidersContainer)
