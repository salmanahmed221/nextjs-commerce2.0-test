import { getHeroSectionHeadingData } from 'lib/shopify/handler';
import Image from 'next/image';


const Heading = async () => {
    const data = await getHeroSectionHeadingData();
    console.log("Heading Data ---->", data);
    
  return (
    <>
    <div className=" flex items-center justify-center mx-auto my-auto py-10">
        {data.map((item : any )=> (
            <div key={item.title}>
                <div>
                <h1>{item.title}</h1>
                <div>
                    <div>
                        <div>
                            <div>
                        <Image 
                        className='mt-5'
                        src={item.image ||  " "}
                         alt='Hero-Section Image'
                         width={300}
                         height={400}
                          />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Heading