import React, { useState } from 'react';

export default function Progress(props) {
  const [progressValue, setProgressValue] = useState(props.value);

  return (
    <progress value={progressValue} max="10"></progress>
  );
}
