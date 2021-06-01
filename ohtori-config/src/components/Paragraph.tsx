import React, { useEffect, useState } from 'react';

const Paragraph = function ParagraphComponent(): JSX.Element {
  const [paragraphState, setParagraphState] = useState('Hello');
  return <p>{paragraphState}</p>
};

export default Paragraph;