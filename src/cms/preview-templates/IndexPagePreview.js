import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../templates/index-page"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()
  console.log(data)
  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(entry.getIn(["data", "image"]))}
        mainheader={{
          title: entry.getIn(["data", "mainheader", "title"]),
          description: entry.getIn(["data", "mainheader", "description"]),
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
