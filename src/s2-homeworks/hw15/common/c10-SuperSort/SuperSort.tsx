import React from 'react';
import styles from '../../HW15.module.css';
import { LuChevronsUpDown, LuChevronUp, LuChevronDown } from 'react-icons/lu';

// добавить в проект иконки и импортировать
const downIcon = <LuChevronDown className={styles.sorting_icon} />;
const upIcon = <LuChevronUp className={styles.sorting_icon} />;
const noneIcon = <LuChevronsUpDown className={styles.sorting_icon} />;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === '') return down;
  if (sort === down) return up;
  if (sort === up) return '';
  return down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = 'hw15',
}) => {
  const up = '0' + value;
  const down = '1' + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + '-sort-' + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <div id={id + '-icon-' + sort}>{icon}</div>
    </span>
  );
};

export default SuperSort;
