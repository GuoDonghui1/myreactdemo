import React from 'react';
import PropTypes from 'prop-types';

QuestionTable.propTypes = {

};

const ds = [
    {
        id: "29",
        title: "效识时维非",
        category: "in",
        remark: "Lorem ipsum dolor sit amet eget volutpat erat labore enim labore enim labore enim labore enim labore enim labore enim",
        reviewDate: "1974-07-31",
        status: 14,
        createTime: "15 Oct 05:16 AM",
    }
]

function QuestionTable(props) {

    const columns = [
        {
            name: '名称',
            dataIndex: 'title',
            key:'',
            render: (item, record) => {
                return (<span>
            {record}
        </span>)},
        },
        {
            name: '来源',
            dataIndex: "category",
        },
        {
            name: '描述',
            dataIndex: "remark",
            render: (item, record) => (
                <span className="truncate">{record}</span>
            ),
        },
        {
            name: '状态',
            dataIndex: 'status',
            render: (item, record) => (
                <span className="badge bg-warning">{record}</span>
            ),
        },
        {
            name: '创建时间',
            dataIndex: 'createTime',
            render: (item, record) => (<>
                <span className="cell-data">{record.substr(0, 6)}</span>
                <span className="note">{record.substr(7, record.length)}</span>
            </>),
        },
        {
            name: '操作',
            dataIndex: 'operation',
            render: (item, record) => (
                <>
                    <a className="btn-sm app-btn-secondary" href="problemset/#"
                       onClick={e => {e.preventDefault();viewDetailsHandler(item.id)}}>
                        详情
                    </a>
                    <a className="btn-sm app-btn-secondary" href="#">删除</a>
                </>
            )
        },
    ];
    return (
        <div></div>
    );
}

export default QuestionTable;
