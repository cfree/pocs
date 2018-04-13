
const circuitBreaker = (target) => {
  const oldValue = Object.getOwnPropertyDescriptor(target, 'sendData');
  console.log('TARGET', target);

  Object.defineProperty(target, 'sendData', {
    value: {
      circuitBreaker: true,
      data: oldValue(),
    }
  });
};

export default circuitBreaker;
