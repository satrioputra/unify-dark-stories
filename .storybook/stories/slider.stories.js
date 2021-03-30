import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, object, boolean, select } from '@storybook/addon-knobs';
import rangeSliderNotes from 'unify-react-mobile/build/RangeSlider/RangeSlider.md';
import sliderNotes from 'unify-react-mobile/build/Slider/Slider.md';
import sliderV2Notes from 'unify-react-mobile/build/SliderV2/SliderV2.md';

import Tips from 'unify-react-mobile/build/Tips';
import Slider from 'unify-react-mobile/build/Slider';
import SliderV2 from 'unify-react-mobile/build/SliderV2';
import RangeSlider from 'unify-react-mobile/build/RangeSlider';

const sliderStories = storiesOf('Components/Sliders', module);

sliderStories.addDecorator(withKnobs);

class SliderStateful extends Component {
  state = {
    values: this.props.values || [0],
  };

  updateValue = sliderState => {
    this.setState({
      values: sliderState.values,
    });
    action('onValuesUpdated');
  };

  render() {
    const min = number('min', 0);
    const max = number('max', 100);
    const step = number('step', 30);
    const separator = number('separator', 4);

    return (
      <div style={{ padding: '32px' }}>
        <RangeSlider
          min={min}
          max={max}
          step={step}
          separator={separator}
          onValuesUpdated={this.updateValue}
          values={this.state.values}
        />
        <p>Min Value: {this.state.values[0]}</p>
      </div>
    );
  }
}

class SliderDoubleStateful extends Component {
  state = {
    values: this.props.values || [20, 80],
  };

  updateValue = sliderState => {
    this.setState({
      values: sliderState.values,
    });
    action('onValuesUpdated');
  };

  render() {
    const min = number('min', 0);
    const max = number('max', 100);
    const step = number('step', 5);
    const separator = number('separator', 4);

    return (
      <div style={{ padding: '32px' }}>
        <RangeSlider
          min={min}
          max={max}
          step={step}
          separator={separator}
          onValuesUpdated={this.updateValue}
          values={this.state.values}
        />
        <p>Min Value: {this.state.values[0]}</p>
        <p>Max Value: {this.state.values[1]}</p>
      </div>
    );
  }
}

sliderStories.add(
  'Default SliderV2',
  () => {
    const disabled = boolean('disabled', false);
    const indicatorMode = select('indicatorMode', ['count', 'interval', 'single', 'none'], 'none');
    const indicatorUnit = number('indicatorUnit', 5);
    const maxValue = number('maxValue', 25);
    const minValue = number('minValue', -25);
    const oneHandlerMode = boolean('oneHandlerMode', false);
    const snapPointMode = select('snapPointMode', ['count', 'interval', 'none'], 'none');
    const snapPointUnit = number('snapPointUnit', 5);
    const value1 = number('value1', -12.5);
    const value2 = number('value2', 25);
    const onValueChange = action('onValue change event');

    const props = {
      disabled,
      indicatorMode,
      indicatorUnit,
      maxValue,
      minValue,
      oneHandlerMode,
      snapPointMode,
      snapPointUnit,
      value1,
      value2,
      onValueChange,
    };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">SliderV2</h2>
            <SliderV2 {...props} />
          </div>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: sliderV2Notes },
  },
);

sliderStories.add(
  'Default RangeSlider [Deprecated Soon]',
  () => {
    const disabled = boolean('disabled', false);
    const min = number('min', 0);
    const max = number('max', 100);
    const step = number('step', 5);
    const separator = number('separator', 4);
    const values = object('values', [1, 15]);

    const props = { disabled, min, max, step, separator, values };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">RangeSlider</h2>
            <RangeSlider {...props} />
          </div>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: rangeSliderNotes },
  },
);

sliderStories.add(
  'Default Slider [Deprecated Soon]',
  () => {
    const block = boolean('block', false);
    const double = boolean('double', false);
    const doubleValue = number('double value', 1);
    const max = number('max', 100);
    const min = number('min', 0);
    const noZero = boolean('noZero', false);
    const separator = number('separator', 4);
    const step = number('step', 5);
    const value = number('value', 1);

    const props = { block, double, doubleValue, max, min, noZero, separator, step, value };

    return (
      <React.Fragment>
        <Tips>
          Switch to <b>Knobs</b> tab on addon panel to dynamically interact with props.
        </Tips>
        <div className="container">
          <div className="section">
            <h2 className="section__title">Slider</h2>
            <Slider {...props} />
          </div>
        </div>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: sliderNotes },
  },
);
