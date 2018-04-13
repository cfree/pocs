import circuitBreaker from './circuit-breaker';

const data = {
  'meow': true,
  'woof': false,
  'rawr': false
};

@circuitBreaker
class Endpoint {
  // Could also add a function-level annotation here
  sendData() {
    return data;
  }
}

export default Endpoint;
