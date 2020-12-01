import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Image from "../components/image"

const ItemContainer = (props) => (
    <div className="split-column">
        <div className="left">
        {/* Image column */}
        <Image></Image>
        </div>
        <div className="right">
            {/* Name of experience */}
            <h3>{props.expTitle}</h3>
            {/* Details column */}
            <p>{props.description}</p>
        </div>
    </div>
)
  
export default ItemContainer
  