import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ArticleTemplate({
  data,
  pageContext: { nodeData, id },
}) {
  const richContent = data.datoCmsArticle.blockContent;
  return (
    <div>
      {console.log("richContent:", richContent)}
      <h1>
        {nodeData.title} {id}
      </h1>
      <div>START</div>
      {richContent.map((block) => {
        return (
          <div key={block.id}>
            {console.log("block:", block.model.apiKey)}
            {block.model.apiKey === "modular_text" && (
              <div>
                {block.multipleParagraphTextNode.childMarkdownRemark.html}
              </div>
            )}
            {block.model.apiKey === "modular_image" && (
              <GatsbyImage
                image={block.image.gatsbyImageData}
                alt={block.image?.alt || "image alt"}
                title={block.image?.title || "image title"}
              />
            )}
          </div>
        );
      })}
      <div>END</div>
    </div>
  );
}

export const query = graphql`
  query ($id: String) {
    datoCmsArticle(id: { eq: $id }) {
      id
      title
      blockContent {
        ... on DatoCmsModularText {
          id
          model {
            apiKey
          }
          multipleParagraphTextNode {
          childMarkdownRemark {
            html
          }
        }
        ... on DatoCmsModularImage {
          id
          model {
            apiKey
          }
          image {
            gatsbyImageData
            alt
            title
          }
        }
      }
    }
  }
`;
