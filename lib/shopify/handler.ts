import { shopifyFetch } from ".";
import { getHeroSectionHeading } from "./CustomQuery/query";

export interface HeadingProps {
    value: string;
    key: string;
  }

export async function getHeroSectionHeadingData() {
    try {
      const res: any = await shopifyFetch({
        query: getHeroSectionHeading,
        cache : "no-cache"
      });
  
      console.log(res);
      const headingData = res?.body?.data?.metaobject?.fields;
      console.log("heading Data ",headingData);
  
      if (headingData) {
        const heading = headingData.find((item: HeadingProps) => item.key === "product_heading");
        const image = headingData.find((item: HeadingProps) => item.key === "product_image");
        console.log("Heading ",heading)
        console.log("Image",image)
        const title = heading?.value || '';
        const imageUrl = image?.reference?.image?.url || '';
  
        const data = [
          {
              title : title,
              image : imageUrl
          }
        ]
  
        return data
        
      }
      
      return [
        {
          title: "",
          imageUrl: "",
        }
      ];
  
    } catch (error) {
      console.log("🚀 ~ file: handler.ts:7 ~ getHeroSectionHeadingData ~ error:", error);
      return [
        {
          title: "",
          imageUrl: "",
        }
      ];
    }
  }