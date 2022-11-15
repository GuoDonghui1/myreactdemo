import React from 'react'
import { ComponentTest } from './components'
import WideRectangleBox from "../container/WideRectangleBox";
import Loading from "../loading/Loading";
import {CircleLoading, CircleLoad, MaterialLoading} from "../loading/CircleLoading";

export default function Temporary() {
    return (
        <WideRectangleBox title={'test'} alertMsg={true} >
            <CircleLoading/>
        </WideRectangleBox>
    );
}
