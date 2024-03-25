import React from 'react'

export default function Progress(props) {
  return (
    <progress value={props.value} max="10"></progress>
    )
}
