import { connect } from 'react-redux';
import { increment } from '../madlibs';

import App from '../components/App';

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
