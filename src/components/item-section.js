import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "../components/image"
import ItemContainer from "../components/item-container"

// Should take an array of items with their own expTitle, description, image. Make sure to check for everything on loop
const ItemSection = (props) => (
    <div>
      <h2>{props.sectionTitle}</h2>
      <ItemContainer
        expTitle="hi"
        description="New Experience"
        image="nameOfFile"/>
    </div>
)
  
export default ItemSection
  