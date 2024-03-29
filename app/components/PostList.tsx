"use client"
import React from 'react';
import { useTable } from 'react-table';
import Post from './Post';

const PostList = ({ posts }:any) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Course',
        accessor: 'title', 
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
        ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: posts });

  return (
    <div className='flex container'>
      <table {...getTableProps()} className="table w-full border-collapse">
        <thead className='bg-sky-300 font-bold p-2 text-left border-b border-slate-300'>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className='hover:bg-sky-200'>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className='text-left border-b border-slate-300 pr-5'>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <ul>
        {posts.map((post:any) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;