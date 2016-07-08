import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import transitions from '../styles/transitions';

const styles = {
  root: {
    position: 'relative',
    height: 4,
    display: 'block',
    width: '100%',
    backgroundColor: '#bdbdbd',
    borderRadius: 2,
    margin: 0,
    overflow: 'hidden'
  },
  bar: {
    height: '100%'
  },
  barFragment1: {
    position: 'absolute',
    backgroundColor: '#303f9f',
    top: 0,
    left: 0,
    bottom: 0,
    transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.650, 0.815, 0.735, 0.395)')
  },
  barFragment2: {
    position: 'absolute',
    backgroundColor: '#f44336',
    top: 0,
    left: 0,
    bottom: 0,
    transition: transitions.create('all', '840ms', null, 'cubic-bezier(0.165, 0.840, 0.440, 1.000)')
  }
};

export class LoadingBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      active: false
    };
  }
  componentDidMount () {
    this.timers = {};

    this.timers.bar1 = this.barUpdate('bar1', 0, this.refs.bar1, [
      [-35, 100],
      [100, -90]
    ]);

    this.timers.bar2 = setTimeout(() => {
      this.barUpdate('bar2', 0, this.refs.bar2, [
        [-200, 100],
        [107, -8]
      ]);
    }, 850);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.loading > 0 && nextProps.loading === 0) {
      setTimeout(() => { this.hideBar(); }, 500, true);
    } else {
      this.showBar();
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timers.bar1);
    clearTimeout(this.timers.bar2);
  }

  barUpdate (id, step, barElement, stepValues) {
    step = step || 0;
    step %= 4;

    const right = 'right';
    const left = 'left';

    if (step === 0) {
      barElement.style[left] = `${stepValues[0][0]}%`;
      barElement.style[right] = `${stepValues[0][1]}%`;
    } else if (step === 1) {
      barElement.style.transitionDuration = '840ms';
    } else if (step === 2) {
      barElement.style[left] = `${stepValues[1][0]}%`;
      barElement.style[right] = `${stepValues[1][1]}%`;
    } else if (step === 3) {
      barElement.style.transitionDuration = '0ms';
    }
    this.timers[id] = setTimeout(() => this.barUpdate(id, step + 1, barElement, stepValues), 420);
  }

  showBar () {
    this.setState({ active: true });
  }
  hideBar () {
    this.setState({ active: false });
  }

  render () {
    const style = {};
    style.display = this.state.active === true ? 'block' : 'none';
    return (
      <div style={Object.assign({}, styles.root, style)}>
        <div style={styles.bar}>
          <div ref='bar1' style={styles.barFragment1}></div>
          <div ref='bar2' style={styles.barFragment2}></div>
        </div>
      </div>
    );
  }
}

LoadingBar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  actions: PropTypes.object,
  loading: PropTypes.number
};

LoadingBar.defaultProps = {
  style: {},
  className: undefined,
  loading: 0
};

const mapStateToProps = (state) => ({
  loading: state.loadingBar
});

export default connect(mapStateToProps)(LoadingBar);
