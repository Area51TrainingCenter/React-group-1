# Data Flow
## Unidirectional Dataflow Pattern
- La data se mueve desde el root hacia los niveles bajos
- From the top to the bottom of the tree
- Mejora el comportamiento de los componentes
- Hace el codigo predecible y mantenible

```
Todo component puede recibir data de su owner en forma de props, y estos props no pueden ser modificados
```

## Child-Parent communication
- La manera en la que un hijo puede modificar sus propios props, es usando un handleEvent que el padre le asigna a través de sus props.
- El punto es crear componentes que desconozcan el data source

## Links
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Data Flow](https://medium.com/@khbrt/react-unidirectional-data-flow-explained-71bc35858226)
- [HoC - Basic explanation](https://medium.com/@muthuks/react-higher-order-components-hoc-explained-e6feb29913f1)