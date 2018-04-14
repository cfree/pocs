
const circuitBreaker = (target, propertyKey, descriptor) => {
  const originalFn = descriptor.value;

  descriptor.value = () => ({
    circuitBreaker: true,
    data: originalFn(),
  });

  return descriptor;
};

export default circuitBreaker;
