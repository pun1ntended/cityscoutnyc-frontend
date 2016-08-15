/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';
import Slider from './preference_slider'

const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
const SliderContainer = class extends Component {
  render() {
    return(
      <form>
        {categories.map((category) => {
          return(
            <div>
              <label>{category}</label>
              <Slider category={category} />
            </div>
          )
        })}
        <input type="submit" />
      </form>
    )
  }
};

export default SliderContainer