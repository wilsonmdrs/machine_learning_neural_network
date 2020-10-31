import React, {useState, useEffect} from 'react'
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = ({loading = false}) => {

    const override = css`
    align-self: center;
    margin: 0 auto;
    z-index: 1001;

`;

const [load, setLoad] = useState(loading)

useEffect(() => {
    console.log("loading",loading)
    setLoad(loading)
},[loading])

    return (
        <section id="loading">
            <div className={load ? "filter" : " "} />
            <ScaleLoader 
            css={override}
            height={35}
            width={4}
            radius={2}
            color={"#fff"}
            loading={loading}
            />
        </section>
    )
}

export const set = (boolean) => this.Loading(boolean)

export default Loading