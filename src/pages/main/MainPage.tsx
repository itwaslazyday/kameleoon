import { JSX, useContext, useState, useEffect, useRef } from 'react';
import Search from 'components/blocks/Search/Search';
import Tasks from 'components/blocks/Tasks/Tasks';
import Head from 'components/blocks/Head/Head';
import { Context } from 'components/blocks/app/App';
import Loader from 'components/ui/Loader/Loader';
import Stub from 'components/blocks/Stub/Stub';
import { SortTypes, Status } from 'const';
import { Test } from 'types/types';

const sortCallback = (id: string, data: Test[]) => {
  switch(id) {
    case SortTypes.NAME:
      return data.sort((a: Test, b: Test) => a.name > b.name ? 1 : (a.name === b.name ? 0 : -1));
    case SortTypes.SITE:
      return data.sort((a: Test, b: Test) => a.link > b.link ? 1 : (a.link === b.link ? 0 : -1));
    case SortTypes.TYPE:
      return data.sort((a: Test, b: Test) => a.type > b.type ? 1 : (a.type === b.type ? 0 : -1));
    case SortTypes.STATUS:
      const ASC = [Status.ONLINE, Status.PAUSED, Status.STOPPED, Status.DRAFT];
      return data.sort((a: Test, b: Test) => ASC.indexOf(a.status) - ASC.indexOf(b.status));
    default: 
      return data;
  }
}

export default function MainPage(): JSX.Element {
  const {loading, sortType, tests} = useContext(Context);
  const [filtered, setFiltered] = useState(tests);
  const [isSearchReset, resetSearch] = useState(false);
  const ref = useRef<{ tests: Test[]}>({ tests });

  useEffect(() => {
    setFiltered(tests);
    ref.current.tests = tests;
  }, [tests]);

  useEffect(() => {
    const tests = sortType === 'DEFAULT' ? ref.current.tests : sortCallback(sortType, [...filtered]);
    sortType !== 'DEFAULT' && (ref.current.tests = filtered);
    setFiltered(tests);
  }, [sortType]);

  const handleSearch = (value: string) => {
    if (value) {
      const filtered = tests.filter((test) => test.name.toLowerCase().includes(value));
      setFiltered(filtered.length ? filtered : []);
    } else {
      setFiltered(tests);
    }
  };

  const handleReset = () => {
    setFiltered(tests);
    resetSearch((prev) => !prev);
  }

  return (
    <main className='main'>
      <Head title='Dashboard'/>
      <Search
        handleSearch={handleSearch}
        resultLength={filtered.length}
        isSearchReset={isSearchReset}
      />
      {
        loading ? <Loader/> : <Tasks tasks={filtered}/>
      }
      {
        !loading && !filtered.length && <Stub onClick={handleReset}/>
      }
    </main>
  );
}
