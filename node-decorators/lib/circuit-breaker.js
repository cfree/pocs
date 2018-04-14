
const circuitBreaker = (target, propertyKey, descriptor) => {
  const oldValue = descriptor.value;

  descriptor.value = () => ({
    circuitBreaker: true,
    data: oldValue(),
  });

  return descriptor;
};

export default circuitBreaker;
