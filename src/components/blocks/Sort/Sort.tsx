import React, { JSX, useContext } from 'react'
import { ReactComponent as ArrowIcon } from "assets/arrow.svg";
import './Sort.css';
import { Context } from "hooks/useStore";
import { SortTypes } from 'const';

const Sort = (): JSX.Element => {
  const { sortType, dispatch } = useContext(Context);

  const handleClick = (item: SortTypes) => {
    if (dispatch) {
      dispatch(item !== sortType ? { type: 'SET_SORT', payload: item } : { type: 'SET_SORT', payload: 'DEFAULT' });
    }
  }

  return (
    <div className='sort'>
      {
        Object.keys(SortTypes).map((item) => (
          <button
            type="button"
            id={item}
            key={item} 
            className={`sort__button ${sortType === item ? '_active' : ''}`}
            onClick={() => handleClick(item as SortTypes)}
          >
            {item}
            <ArrowIcon className='sort__icon'/>
          </button>
        ))
      }
    </div>
  )
}

export default Sort;