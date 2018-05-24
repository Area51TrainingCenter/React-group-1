# Composing

## Communication between components
### Props
```javascript
const Profile = ({ user }) => (
  <div>
    <Picture profileImageUrl={user.profileImageUrl} />
    <UserName name={user.name} screenName={user.screenName} />
  </div>
)

Profile.propTypes = {
  user: React.PropTypes.object,
}
```

### Children
```javascript
const Button = ({ children }) => (
     <button className="btn">{children}</button>
)
   Button.propTypes = {
     children: React.PropTypes.array,
}
```

## Container and Presentational pattern
![Container and Presentational pattern](https://cdn-images-1.medium.com/max/1600/1*tIdBW-TqotpALD3b2xk3SA.gif)

### Container
- Se preocupan por el comportamiento
- Renderizan Presentational components
- Hacen llamadas a un API y manipulan información
- Define eventos
- Están escritos como clases

### Presentational
- Se preocupan por lo visual
- Renderizan HTML u otros components
- Reciben data de los padres en forma de props
- Casi siempre son Stateless functional components

## LSG

## Links