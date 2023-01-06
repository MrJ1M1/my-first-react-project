import "./app-info.css"

const AppInfo = ({allFilmsCount, favouriteFilmCount}) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase">Barcha kinolar soni: {allFilmsCount}</p>
      <p className="fs-4 text-uppercase">Sevimli film: {favouriteFilmCount}</p>
    </div>
  )
}

export default AppInfo