import React from 'react';
import PropTypes from 'prop-types';
import './table.scss';

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    dataSource: PropTypes.array.isRequired,
    rowKey: PropTypes.string,
};

function Table(props) {
    console.log('table---render');
    return (
        <div className="tab-content" id="orders-table-tab-content">
            <div className="tab-pane fade active show" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
                <div className="app-card app-card-orders-table shadow-sm mb-5">
                    <div className="app-card-body">
                        <div className="table-responsive">
                            <table className="table app-table-hover mb-0 text-left">
                                <thead>
                                <tr>
                                    {props.columns.map(col => (
                                        <th className="cell" key={col.key || col.dataIndex}>{col.name}</th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {props.dataSource.map(d => (
                                    <tr key={d[props.rowKey]}>
                                        {props.columns.map(c => (
                                            <td className={'cell'} key={c.key || c.dataIndex}>{
                                                c.hasOwnProperty('render') ? c.render(d, d[c.dataIndex]) : d[c.dataIndex]
                                            }</td>
                                        ))}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
