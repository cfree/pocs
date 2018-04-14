import circuitBreaker from './circuit-breaker';

const data = {
  'meow': true,
  'woof': false,
  'rawr': false
};

class Endpoint {
  @circuitBreaker
  getData() {
    return data;
  }
}

export default Endpoint;
