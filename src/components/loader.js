import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={200}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="7" rx="3" ry="3" width="340" height="6" /> 
    <rect x="20" y="25" rx="3" ry="3" width="200" height="6" /> 
    <rect x="20" y="59" rx="3" ry="3" width="340" height="6" /> 
    <rect x="20" y="75" rx="3" ry="3" width="310" height="6" /> 
    <rect x="20" y="124" rx="3" ry="3" width="178" height="6" /> 
    <rect x="20" y="90" rx="3" ry="3" width="178" height="6" />
  </ContentLoader>
)

export default MyLoader;