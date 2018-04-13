import circuitBreaker from './circuit-breaker';

const data = {
  'meow': true,
  'woof': false,
  'rawr': false
};

@circuitBreaker
class Endpoint {
  sendData() {
    return data;
  }
}

export default Endpoint;
