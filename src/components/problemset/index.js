import React, {Suspense, lazy, useState, memo} from 'react';
import PropTypes from 'prop-types';
import BaseContentContainer from "../container/BaseContentContainer";
import ContentBetweenContainer from "../container/ContentBetweenContainer";
import PageUtilitiesContainer from "../container/PageUtilitiesContainer";
import Table from "../common/table/Table";
import {Route, Switch} from 'react-router-dom';
import RouterLoading from "../loading/RouterLoading";
import Question from "./Question";

ProblemSet.propTypes = {

};
/*const Question = lazy(() => {
    return import("./Question");
});*/


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
function ProblemSet(props) {
    let [loadingDetails, setLoadingDetails] = useState(false);

    const viewDetailsHandler = (item) => {
        setLoadingDetails(true);
        setTimeout(() => {
            setLoadingDetails(false);
            props.history.push('/problemset/101');
        }, 3000);
    };

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
        <>
            <Switch>
                <Route path={'/problemset'} exact render={p => {
                    return (
                        <BaseContentContainer>
                            <ContentBetweenContainer>
                                <h1 className="app-page-title mb-0">题目列表</h1>
                                <PageUtilitiesContainer>
                                    <form className="table-search-form row gx-1 align-items-center">
                                        <div className="col-auto">
                                            <input type="text" id="search-orders" name="searchorders"
                                                   className="form-control search-orders" placeholder="Search"/>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn app-btn-secondary">Search</button>
                                        </div>
                                    </form>
                                </PageUtilitiesContainer>
                            </ContentBetweenContainer>
                            <Table {...p} columns={columns} dataSource={ds} rowKey={'id'}/>
                        </BaseContentContainer>
                    )
                }}/>

                {/*<Suspense fallback={ <RouterLoading/> }>*/}
                <Route path={'/problemset/:questionId'} component={Question}/>
                {/*</Suspense>*/}
            </Switch>
            {loadingDetails ? <RouterLoading/> : null}
        </>
    );
}

export default ProblemSet;