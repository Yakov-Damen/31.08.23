export default function Card({color}) {
  return (
    <>
      <div style={{border: '1px solid red', backgroundColor: color}}>
        <h2>tis is the title</h2>
        <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" alt="img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, incidunt?</p>
      </div>
    </>
  )
}
