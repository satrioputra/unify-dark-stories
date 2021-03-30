import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from 'unify-react-mobile/build/Pagination';
import QuantityEditor from 'unify-react-mobile/build/QuantityEditor';
import notes from 'unify-react-mobile/build/Pagination/Pagination.md';

const paginationStories = storiesOf('Components/Pagination', module);
const storyOptions = {
  notes: {
    markdown: notes
  }
}

paginationStories.add('Default', () => {
  const [currentIndex, currentIndexSet] = useState(0)
  const [totalItem, totalItemSet] = useState(15)
  
  const handleChange = ({ currentIndex }) => {
    currentIndexSet(currentIndex)
  }

  return (
    <div className="container">
      <div className="section">
        <h2 className="section__title">Pagination</h2>
        <Pagination
          activeIndex={currentIndex}
          items={totalItem}
          baseURL={"https://www.tokopedia.com/find/masker?page="}
          onClickPrev={() => {console.log("click prev")}}
          onClickNext={() => {console.log("click next")}}
          onChange={handleChange}
          />
      </div>
      <div className="section">
        <h2 className="section__title">
          Controllers
        </h2>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: '1 1 auto' }}>
            <h3>Active Index</h3>
            <QuantityEditor
              value={currentIndex}
              min={0}
              onClickMin={() => currentIndexSet(currentIndex-1)}
              onClickPlus={() => currentIndexSet(currentIndex+1)}
              onChange={(value) => currentIndexSet(parseInt(value, 10))}
            />
          </div>
          <div style={{ flex: '1 1 auto' }}>
            <h3>Total Items</h3>
            <QuantityEditor
              value={totalItem}
              onClickMin={() => totalItemSet(totalItem-1)}
              onClickPlus={() => totalItemSet(totalItem+1)}
              onChange={(value) => totalItemSet(parseInt(value, 10))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}, storyOptions);
