import React from 'react';
import ScoresResult from '../containers/ScoresResult';

export default function() {
  return(
    <div className="ink-grid">
      <div className="column-group">
        <div id="result-page">
          <ScoresResult />
        </div>
      </div>
    </div>
  )
}
