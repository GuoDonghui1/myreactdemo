import React from 'react';
import PropTypes from 'prop-types';
import BaseContentContainer from "../container/BaseContentContainer";
import WideRectangleBox from "../container/WideRectangleBox";
import RouterLoading from "../loading/RouterLoading";

Question.propTypes = {};

function Question(props) {
    return (
        <BaseContentContainer title={'问题详情'}>
            <WideRectangleBox>
                <span>我是问题详情{` - ${props.match.params.questionId}`}</span>
                <button type="button" className="btn-close" data-dismiss="alert"
                        aria-label="Close" onClick={() => props.history.goBack()}/>
            </WideRectangleBox>
        </BaseContentContainer>
    );
}

export default Question;
