// import React from "react";

// const ImageHelper = ({ product }) => {
//   const imageurl = product
//     ? product.image
//     : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
//   return (
//     <div className="rounded border border-success p-2">
//       <img
//         src={imageurl}
//         style={{ maxHeight: "100%", maxWidth: "100%" }}
//         className="mb-3 rounded"
//         alt=""
//       />
//     </div>
//   );
// };

// export default ImageHelper;
import React from "react";

const ImageHelper = ({ product }) => {
  var imageurl = "https://drive.google.com/file/d/19_gjKsmpuq8lAzktEdeCc8FobGJsgxIX/view?usp=share_link";
  switch ((String)(product.name)) {
    case 'Levis1':
      imageurl = "https://drive.google.com/file/d/1T7gG2eKbt2S-gY73TBp197Vqm5A82EeO/view?usp=share_link";
      break;
    case 'Levis2':
      imageurl = "https://drive.google.com/file/d/1B5FIap2QMyFTZWpC7JTh3U8AMIlNIvZZ/view?usp=share_link";
      break;
    case 'Levis3':
      imageurl = "https://drive.google.com/file/d/1BqMxhocjCH8j4bpgvHqCkTMY48wxsZVr/view?usp=share_link";
      break;
    case 'Levis4':
      imageurl = "https://drive.google.com/file/d/133Rx764A27lIHYwHGiNl3V7egV3bKLSG/view?usp=share_link";
      break;
    case 'Puma1':
      imageurl = "https://drive.google.com/file/d/17FjdVMorh2N4jJQqu4exyISeluRuX4ne/view?usp=share_link";
      break;
    case 'Puma2':
      imageurl = "https://drive.google.com/file/d/14JkoNKvb7X_qKEDTVIUmrmFXtICpzIxH/view?usp=share_link";
      break;
    case 'Puma3':
      imageurl = "https://drive.google.com/file/d/1sdQ6LJqgGQPuRdAjmcc1nvgnOmGwobs8/view?usp=share_link";
      break;
    case 'Puma4':
      imageurl = "https://drive.google.com/file/d/1PTcbJuSQ-nyw5Qn1tejTx6hlO2Vk6Qri/view?usp=share_link";
      break;
    case 'Wrogn1':
      imageurl = "https://drive.google.com/file/d/1lllnKYy0FYoB_gUeRvneDAsydW7rmRVZ/view?usp=share_link";
      break;
    case 'Wrogn2':
      imageurl = "https://drive.google.com/file/d/1FRdsmmKt-SlAfL6FUfU1nmuvFhxuO-Sy/view?usp=share_link";
      break;
    case 'Wrogn3':
      imageurl = "https://drive.google.com/file/d/12V3_3YTsv2ib-NAvu3TB8Z46ONDwneEf/view?usp=share_link";
      break;
    case 'Wrogn4':
      imageurl = "https://drive.google.com/file/d/19_gjKsmpuq8lAzktEdeCc8FobGJsgxIX/view?usp=share_link";
      break;
    default:
      break;
  }
  
  return (
    <div className="p-2 products-home m-auto">
      <img
        src={imageurl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 image"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
