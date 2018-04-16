# Node Decorators

This spike is to see how a decorator would work as a circuit breaker wrapper in an API endpoint.

Output without circuit breaker:
```
{
  "meow": true,
  "woof": false,
  "rawr": false
}
```

Output with circuit breaker:
```
{
  "circuitBreaker": true,
  "data": {
    "meow": true,
    "woof": false,
    "rawr": false
  }
}
```

# Development

`yarn start`

Visit [http://localhost:1337](http://localhost:1337)

