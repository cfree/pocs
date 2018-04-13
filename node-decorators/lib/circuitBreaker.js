
export default circuitBreaker = (target) => {
  target.sendData = {
    circuitBreaker: true,
    data: target.sendData(),
  }
};
