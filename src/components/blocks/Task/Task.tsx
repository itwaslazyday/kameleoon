import React, { JSX } from 'react'
import { Status  } from 'const';
import Button from 'components/ui/Button/Button';
import './Task.css';
import { useNavigate } from 'react-router-dom';
import { Test } from 'types/types';

const Task = ({ name, type, id, status, link }: Test): JSX.Element => {
  const navigate = useNavigate();

  return (
    <article className={`task task--${status.toLowerCase()}`}>
      <span className='task__name'>{name}</span>
      <span className='task__type'>{type}</span>
      <span className='task__status'>{status}</span>
      {link && <a href={link} className='task__link'>{new URL(link).host.replace('www.','')}</a>}
      <Button onClick={() => navigate(`/test/${id}`)}>
        {status === Status.DRAFT ? 'Finalize' : 'Results'}
      </Button>
    </article>
  )
}

export default Task;