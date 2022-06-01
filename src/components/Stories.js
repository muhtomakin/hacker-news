import React from 'react'
import { useGlobalContext } from './context'

const Stories = () => {
    const {isLoading, isError, data, removeStory} = useGlobalContext();

    console.log(data)

    return (
        <div>
            {isLoading ? <div className='loading'></div> : (
                <section className='stories'>
                {data.map((story) => {
                  const { objectID, title, num_comments, url, points, author } = story
                  return (
                    <article key={objectID} className='story'>
                      <h4 className='title'>{title}</h4>
                      <p className='info'>
                        {points} points by <span>{author} | </span> {num_comments}{' '}
                        comments
                      </p>
                      <div>
                        <a
                          href={url}
                          className='read-link'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          read more
                        </a>
                        <button
                          className='remove-btn'
                          onClick={() => removeStory(objectID)}
                        >
                          remove
                        </button>
                      </div>
                    </article>
                  )
                })}
              </section>
            )}
        </div>
    )
}

export default Stories