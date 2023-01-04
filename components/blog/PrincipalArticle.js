
import classNames from "classnames"

function ReadArticle(props) {

  const { reading, type } = props

  const classes = classNames('mb-3 d-flex p-2', {
    'flex-column': type === 'column',
    'text-start': type === 'row'
  })

  return (
    <>
      <div className={classes} style={type === 'column' ? { width: '33%' } : {}}>
        <div>
          <a href="#">
            <img
              className='rounded-3 me-2'
              src={reading.image}
              style={{
                width: type === 'column' ? '60%' : 'auto',
                height: type === 'column' ? '60%' : 'auto',
                objectFit: type === 'column' ? 'contain' : 'cover'
              }}
            />
          </a>
        </div>
        <div className="ps-3">
          <h6>{reading.title.toUpperCase()}</h6>
          <span className="text-muted mb-2"><small>{reading.date}</small></span>
          <p className="mt-3">{reading.article}</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default ReadArticle