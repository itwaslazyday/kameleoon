import React, { JSX, useEffect, useRef, useId } from 'react';
import './Search.css';
import { ReactComponent as SearchIcon } from "assets/search.svg";

type SearchProps = {
  handleSearch: (value: string) => void;
  resultLength: number;
  isSearchReset?: boolean;
};

const Search = ({ handleSearch, resultLength, isSearchReset }: SearchProps): JSX.Element => {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current && (ref.current.value = '');
  }, [isSearchReset]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    handleSearch(value.toLowerCase());
  }

  return (
    <search className='search container'>
      <label className='search__label' htmlFor={id}>
        <SearchIcon className='search__icon'/>
        <input
          ref={ref}
          className='search__input'
          id={id}
          onInput={handleInput}
          type='text'
          placeholder='What test are you looking for?'
        />
        <span className='search__result'>{resultLength} results</span>
      </label>
    </search>
  )
}

export default Search;