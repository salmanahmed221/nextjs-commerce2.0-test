// export const getHeroSectionHeading = /* GraphQL */ `
// query getHeroSectionHeading {
//   metaobject(
//     handle: {handle: "step-up-your-style-game-with-our-curated-collection", type: "hero_section_title"}
//   ) {
//     fields {
//       value
//       key
//       reference {
//         ... on MediaImage {
//           image {
//             url
//           }
//         }
//       }
//     }
//   }
// }
// `

export const getHeroSectionHeading = /* GraphQL */ `
query getHeroSectionHeading {
    metaobject(
        handle: {handle: "Heading", type: "heading"}
    ) {
      fields {
        value
        key
        reference {
        ... on MediaImage {
           image {
            url
           }
        }
        }
      }
    }
  }
  `