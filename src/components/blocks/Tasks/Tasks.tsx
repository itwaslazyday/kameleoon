import React, { JSX } from 'react';
import { Test } from 'types/types';
import Task from 'components/blocks/Task/Task';
import './Tasks.css';
import Sort from '../Sort/Sort';

type TasksProps = {
  tasks: Test[];
};

const Tasks = ({ tasks }: TasksProps): JSX.Element => {

  const items = tasks.map((task) => (
    <li key={task.id} className='task__item'>
      <Task {...task}/>
    </li>
  ));

  return (
    <section className='tasks container'>
      <Sort />
      <ul className="task__list">{items}</ul>
    </section>
  )
}

export default Tasks;