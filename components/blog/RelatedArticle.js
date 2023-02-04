
import classNames from "classnames"

function RelatedArticle(props) {

  const { article, type } = props

  const classes = classNames('mb-3 d-flex p-2', {
    'flex-column': type === 'column',
    'align-items-center': type === 'row'
  })

  return (
    <>
      <div className={classes} style={type === 'column' ? { width: '33%' } : {}}>
        <div>
          <img
            className='rounded-3 me-2'
            src={article.image ? article.image : 'https://via.placeholder.com/150'}
            style={{
              width: type === 'column' ? '100%' : 60,
              height: type === 'column' ? 'auto' : 60,
              objectFit: type === 'column' ? 'contain' : 'cover'
            }}
          />
        </div>
        <div>
          <span>{article.title}</span>
        </div>
      </div>
      <hr />
    </>
  )
}

export default RelatedArticle