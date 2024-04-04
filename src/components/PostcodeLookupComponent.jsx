import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";
import { useEffect, createRef, useState } from 'react' 


const PostcodeLookupComponent = (props) => {
    const context = createRef();
  
    useEffect(() => {
      PostcodeLookup.setup({
        apiKey: "ak_test",
        context: context.current,
        buttonStyle: {
          backgroundColor: "#1B3954",
          color: "#5DCAD1"
        },
        outputFields: {
            line_1: "#first_line",
            line_2: "#second_line",
            line_3: "#third_line",
            post_town: "#post_town",
            postcode: "#postcode"
          },
        ...props
      });
    }, []);

    return <div ref={context}></div>;

}

export default PostcodeLookupComponent