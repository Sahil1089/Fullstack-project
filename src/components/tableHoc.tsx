import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { useTable, Column, TableOptions ,useSortBy,usePagination} from 'react-table'








function tableHoc<T extends Object>(
    columns: Column<T>[],
     data: T[], 
     containerClassname: string, 
     heading: string,
     ShowPagination:boolean=false
) {
    return function Hoc() {
            const options: TableOptions<T> = {
                columns,
                data,
                initialState:{
                    pageSize:5
                }
            }
            const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow ,nextPage,previousPage,pageCount,state:{pageIndex},canNextPage,canPreviousPage} = useTable(options,useSortBy,usePagination);
            return <div className={containerClassname}>
                <h2 className='heading'>{heading}</h2>
                {/* table */}
                <table className='table' {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column:any) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render("Header")}
                                        {
                                            column.isSorted && <span>
                                                {" "}
                                                
                                                {column.isSortedDesc?(<AiOutlineSortDescending/>):(<AiOutlineSortAscending/>)}</span>
                                        }
                                    </th>
                                ))}
                            </tr>
                        ))}

                    </thead>
                    {/* body */}
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map((row) => {
                                prepareRow(row);

                                return <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}

                                </tr>
                                ;
                            })
                        }


                    </tbody>

                </table>
                {/* creating pagination */}  

                {
                    ShowPagination && (
                        <div className='page-nav'>
                            <button disabled={!canPreviousPage} onClick={previousPage}>prev</button>
                            <span>{`${pageIndex +1} page of ${pageCount}`}</span>
                            <button disabled={!canNextPage} onClick={nextPage}>next</button>
                        </div>
                    )


                }



            </div>

        }
    
}

export default tableHoc