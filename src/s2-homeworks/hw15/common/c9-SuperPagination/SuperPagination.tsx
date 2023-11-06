import React, { ChangeEvent, MouseEvent } from 'react';
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect';
import { Pagination } from '@mui/material';
import s from './SuperPagination.module.css';

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = 'hw15',
}) => {
  // const lastPage = 10; // пишет студент // вычислить количество страниц
  const lastPage = Math.ceil(totalCount / itemsCountForPage);

  const onChangeCallback = (event: any, page: number) => {
    // пишет студент
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    // пишет студент
    onChange(page, Number(event.currentTarget.value));
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        sx={
          {
            // стили для Pagination // пишет студент
          }
        }
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <div className={s.text1}>показать</div>

      <div className={s.select_box}>
        <SuperSelect
          id={id + '-pagination-select'}
          value={itemsCountForPage}
          options={[
            { id: 4, value: 4 },
            { id: 7, value: 7 },
            { id: 10, value: 10 },
          ]}
          onChange={onChangeSelect}
          className={s.select_box}
        />
      </div>

      <div className={s.text2}>строк в таблице</div>
    </div>
  );
};

export default SuperPagination;
