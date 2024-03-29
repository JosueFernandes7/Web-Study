import React from 'react'

function Head(props) {
  React.useEffect(() => {
    document.title = `Site | ${props.title}`;
    document.querySelector('meta[name="description"]').setAttribute('content', props.description)
  }, [props])
  return (
    <>
    </>
  )
}

export default Head