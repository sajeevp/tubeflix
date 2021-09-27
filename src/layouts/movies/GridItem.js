const GridItem = props => {
  return (
    <>
      {props.items.map(e =>
        <div className='text-white bg-gray-900 bg-opacity-80 rounded-md transform hover:scale-150'>
        <img src={e.snippet.thumbnails.high.url} alt={e.snippet.title} />
        <h2 className="p-5">{e.snippet.title}</h2>
        </div>
      )}
    </>
  )
}

export default GridItem
