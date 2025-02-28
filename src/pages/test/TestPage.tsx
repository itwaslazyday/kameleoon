import Back from 'components/blocks/Back/Back';
import Head from 'components/blocks/Head/Head';
import { Context } from "hooks/useStore";
import Loader from 'components/ui/Loader/Loader';
import { ProcessTypes, Status } from 'const';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Test } from 'types/types';

const TestPage = () => {
  const { id } = useParams();
  const { loading, tests } = useContext(Context);
  const [ pageData, setPageData ] = useState<Test>();

  const process = pageData?.status === Status.DRAFT ? ProcessTypes.Finalize : ProcessTypes.Results;

  useEffect(() => {
    const test = id && tests.find((item: Test) => +item.id === +id);
    test && setPageData(test);
  }, [tests]);

  return (
    <main className='main'>
      {
        loading ? 
          <Loader/> : 
          <Head
            title={process}
            subtitle={pageData?.name}
          />
      }
      <Back/>
    </main>
  )
}

export default TestPage